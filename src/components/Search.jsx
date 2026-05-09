import React from "react";

export default function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Type a name to search..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}