function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="toolbar-item">
      <label htmlFor="search">Search by title</label>
      <input
        id="search"
        type="text"
        placeholder="Search resources..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
