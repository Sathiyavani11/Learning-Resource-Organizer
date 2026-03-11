const categoryClassMap = {
  HTML: 'cat-html',
  CSS: 'cat-css',
  JavaScript: 'cat-js',
  React: 'cat-react',
  'UI/UX': 'cat-uiux',
  'Node.js': 'cat-node',
  Other: 'cat-other'
};

const levelClassMap = {
  Basic: 'level-basic',
  Intermediate: 'level-intermediate',
  Advanced: 'level-advanced'
};

function ResourceCard({ resource, onDelete }) {
  const badgeClass = categoryClassMap[resource.category] || 'cat-other';
  const level = resource.level || 'Basic';
  const levelClass = levelClassMap[level] || 'level-basic';

  return (
    <article className="resource-card">
      <div className="card-top">
        <h3>{resource.title}</h3>
        <div>
          <span className={`category-badge ${badgeClass}`}>{resource.category}</span>
          <span className={`level-badge ${levelClass}`}>{level}</span>
        </div>
      </div>

      <a href={resource.url} target="_blank" rel="noreferrer" className="resource-link">
        {resource.url}
      </a>

      <button className="btn btn-danger" onClick={() => onDelete(resource.id)}>
        Delete
      </button>
    </article>
  );
}

export default ResourceCard;
