import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary((prev) => [...prev, book]);
  };

  const removeFromLibrary = (id) => {
    setMyLibrary((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
