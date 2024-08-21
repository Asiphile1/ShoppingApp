import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Search = ({ setFilteredItems }) => {
  const [query, setQuery] = useState('');
  const items = useSelector((state) => state.shoppingList.items);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div className="search-overlay">
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
