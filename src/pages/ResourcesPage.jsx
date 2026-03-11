import { useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AddResource from '../components/AddResource';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ResourceList from '../components/ResourceList';
import { categories, getCurrentUser, getUserResources, saveUserResources } from '../utils/resourceStore';

const experienceLevels = ['All', 'Basic', 'Intermediate', 'Advanced'];

function ResourcesPage() {
  const currentUser = getCurrentUser();
  const [resources, setResources] = useState(() =>
    currentUser?.email ? getUserResources(currentUser.email) : []
  );
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchText.trim().toLowerCase());
      const matchesCategory = category === 'All' || resource.category === category;
      const matchesLevel =
        level === 'All' ||
        (resource.level ? resource.level === level : level === 'Basic');
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [resources, searchText, category, level]);

  const sortedResources = useMemo(() => {
    const levelOrder = { Basic: 0, Intermediate: 1, Advanced: 2 };
    return [...filteredResources].sort((a, b) => {
      const aLevel = a.level || 'Basic';
      const bLevel = b.level || 'Basic';
      return (levelOrder[aLevel] ?? 0) - (levelOrder[bLevel] ?? 0);
    });
  }, [filteredResources]);

  const recommendedResources = useMemo(() => {
    return sortedResources.filter((resource) => (resource.level || 'Basic') === 'Basic').slice(0, 3);
  }, [sortedResources]);

  const learningPath = useMemo(() => {
    const levels = ['Basic', 'Intermediate', 'Advanced'];
    return levels.map((levelName) => ({
      level: levelName,
      items: sortedResources.filter((resource) => (resource.level || 'Basic') === levelName)
    }));
  }, [sortedResources]);

  const addResource = (resource) => {
    const updated = [resource, ...resources];
    setResources(updated);
    saveUserResources(currentUser.email, updated);
  };

  const deleteResource = (resourceId) => {
    const updated = resources.filter((resource) => resource.id !== resourceId);
    setResources(updated);
    saveUserResources(currentUser.email, updated);
  };

  return (
    <div className="page">
      <Navbar currentUser={currentUser} />
      <main className="dashboard-wrap">
        <section className="intro-banner">
          <h1>Resources Module</h1>
          <p>This page is only for managing your resources.</p>
        </section>

        <AddResource onAddResource={addResource} categories={categories} />

        <section className="panel">
          <h2>Search and Filter Resources</h2>
          <p className="hint-text">
            Choose your experience level to see resources tailored for Basic, Intermediate, or Advanced learning.
          </p>
          <div className="toolbar">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <CategoryFilter category={category} setCategory={setCategory} categories={categories} />
            <div className="toolbar-item">
              <label htmlFor="level-filter">Experience level</label>
              <select
                id="level-filter"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
              >
                {experienceLevels.map((item) => (
                  <option key={item} value={item}>
                    {item === 'All' ? 'All levels' : item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {level === 'All' && recommendedResources.length > 0 && (
            <section className="panel">
              <h3>Start Here</h3>
              <p>We recommend starting with these Basic-level resources:</p>
              <ul className="recommend-list">
                {recommendedResources.map((resource) => (
                  <li key={resource.id}>
                    <a href={resource.url} target="_blank" rel="noreferrer">
                      {resource.title}
                    </a>
                    <span className="level-badge level-basic">Basic</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {level === 'All' && (
            <section className="panel">
              <h3>Learning Path (Start → End)</h3>
              <p>All resources are ordered from easiest to most advanced; follow them in sequence for a complete flow.</p>
              {learningPath.map(({ level: levelName, items }) =>
                items.length > 0 ? (
                  <div key={levelName} className="learning-path-section">
                    <h4>{levelName}</h4>
                    <ol className="learning-path-list">
                      {items.map((resource) => (
                        <li key={resource.id}>
                          <a href={resource.url} target="_blank" rel="noreferrer">
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null
              )}
            </section>
          )}

          <ResourceList resources={sortedResources} onDelete={deleteResource} />
        </section>
      </main>
    </div>
  );
}

export default ResourcesPage;
