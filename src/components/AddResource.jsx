import { useState } from 'react';

const defaultCategories = ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX', 'Node.js', 'Other'];
const difficultyLevels = ['Basic', 'Intermediate', 'Advanced'];

function AddResource({ onAddResource, categories = defaultCategories }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [level, setLevel] = useState(difficultyLevels[0]);
  const [error, setError] = useState('');

  const isValidUrl = (value) => {
    try {
      const parsed = new URL(value);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (http or https).');
      return;
    }

    onAddResource({
      id: Date.now().toString(),
      title: title.trim(),
      url: url.trim(),
      category,
      level
    });

    setTitle('');
    setUrl('');
    setCategory(categories[0]);
    setLevel(difficultyLevels[0]);
    setError('');
  };

  return (
    <section className="panel">
      <h2>Add New Resource</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Example: React Official Docs"
          />
        </div>

        <div className="form-field">
          <label htmlFor="url">URL *</label>
          <input
            id="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://..."
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" value={level} onChange={(event) => setLevel(event.target.value)}>
            {difficultyLevels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="hint-text" style={{ margin: '8px 0 0' }}>
            Pick a level so you can filter by Basic / Intermediate / Advanced later.
          </p>
        </div>

        <button type="submit" className="btn btn-primary fit-content">
          Save Resource
        </button>
      </form>
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

export default AddResource;
