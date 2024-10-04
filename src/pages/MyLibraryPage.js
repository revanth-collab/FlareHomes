// src/pages/MyLibraryPage.js
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import {Link} from "react-router-dom"

import "./pages.css"

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  const handleRemoveFromLibrary = (id) => {
    removeFromLibrary(id);
  };

  if (myLibrary.length === 0) {
    return <div className='error'><h1 className='error-message'>Your library is empty. Add some books!</h1>
    <Link to={`/`}>
    <button className='button'>back</button>
    </Link></div>;
  }

  return (
    <div className='library'>
      <h1>My Library</h1>
      <ul className='unlist'>
        {myLibrary.map((book) => (
          <li key={book.id} className='library-list'>
            <h1 className='library-title'><span className='title'>{book.title}</span> by {book.author}</h1>
            <button onClick={() => handleRemoveFromLibrary(book.id)} className='button'>Remove</button>
          </li>
        ))}
      </ul>
      <Link to={`/`}>
      <button className='button'>Back</button>
      </Link>
    </div>
  );
};

export default MyLibraryPage;
