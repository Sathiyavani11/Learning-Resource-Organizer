function CategoryFilter({ category, setCategory, categories }) {
  return (
    <div className="toolbar-item">
      <label htmlFor="category-filter">Filter by category</label>
      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
