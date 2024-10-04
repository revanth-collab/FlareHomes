// src/pages/MyLibraryPage.js
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  const handleRemoveFromLibrary = (id) => {
    removeFromLibrary(id);
  };

  if (myLibrary.length === 0) {
    return <div>Your library is empty. Add some books!</div>;
  }

  return (
    <div>
      <h1>My Library</h1>
      <ul>
        {myLibrary.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleRemoveFromLibrary(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyLibraryPage;
