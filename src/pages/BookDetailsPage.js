// src/pages/BookDetailsPage.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams,Link } from 'react-router-dom';
import { fetchBooks } from '../services/bookService';
import { LibraryContext } from '../context/LibraryContext';


import "./pages.css"

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addToLibrary, myLibrary } = useContext(LibraryContext);

  useEffect(() => {
    const loadBook = async () => {
      const data = await fetchBooks();
      const foundBook = data.find((b) => b.id === parseInt(id));
      setBook(foundBook);
    };

    loadBook();
  }, [id]);

  const handleAddToLibrary = () => {
    if (book && !myLibrary.find((b) => b.id === book.id)) {
      addToLibrary(book);
      alert(`${book.title} added to your library!`);
    } else {
      alert('This book is already in your library.');
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className='book-details'>
      <div>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Publication Year:</strong> {book.publication_year}</p>
        <button onClick={handleAddToLibrary} className='button'>Add to My Library</button>
      </div>
      <Link to={`/`}><button className='button'>Back</button></Link>
    </div>
  );
};

export default BookDetailsPage;
