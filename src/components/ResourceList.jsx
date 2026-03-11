import ResourceCard from './ResourceCard';

function ResourceList({ resources, onDelete }) {
  if (!resources.length) {
    return <p className="empty-message">No Resources Found</p>;
  }

  return (
    <section className="resource-grid">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default ResourceList;
