import React, { useState } from 'react';
import {Link} from "react-router-dom"

import "./books.css"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
    <form onSubmit={handleSearch} className='search-container'>
      <input 
        type="text" 
        placeholder="Search by title, author, or genre" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className='search'
      />
      <button type="submit" className='button'>Search</button>
      <Link to={`/my-library`}>
      <button className='button'>My Library</button>
    </Link>
    </form>
    </>
  );
};

export default SearchBar;

