import { Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories, getCurrentUser, getUserResources } from '../utils/resourceStore';

function DashboardPage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const resources = getUserResources(currentUser.email);
  const totalResources = resources.length;
  const uniqueCategories = new Set(resources.map((item) => item.category)).size;

  const latestResources = resources.slice(0, 3);

  return (
    <div className="page">
      <Navbar currentUser={currentUser} />

      <main className="dashboard-wrap">
        <section className="intro-banner">
          <h1>Dashboard Home</h1>
          <p>Now your content is split into separate pages. Use the modules below to open each section.</p>
        </section>

        <section className="stats-grid">
          <article className="stats-card">
            <p>Total Resources</p>
            <h3>{totalResources}</h3>
          </article>
          <article className="stats-card">
            <p>Categories Used</p>
            <h3>{uniqueCategories}</h3>
          </article>
          <article className="stats-card">
            <p>Current User</p>
            <h3>{currentUser.name}</h3>
          </article>
        </section>

        <section className="panel">
          <h2>Open Modules</h2>
          <div className="content-grid">
            <article className="content-card">
              <h3>Resources Module</h3>
              <p>Add, search, filter, and delete learning resources on a dedicated page.</p>
              <Link to="/resources" className="btn btn-primary">Go to Resources</Link>
            </article>
            <article className="content-card">
              <h3>Insights Module</h3>
              <p>View category-wise counts and topic distribution separately.</p>
              <Link to="/insights" className="btn btn-primary">Go to Insights</Link>
            </article>
            <article className="content-card">
              <h3>Learning Path Module</h3>
              <p>See weekly roadmap and structured daily learning routine.</p>
              <Link to="/learning-path" className="btn btn-primary">Go to Learning Path</Link>
            </article>
          </div>
        </section>

        <section className="panel">
          <h2>Recent Saved Resources</h2>
          <div className="insight-grid">
            {latestResources.map((item) => (
              <article className="insight-card" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
