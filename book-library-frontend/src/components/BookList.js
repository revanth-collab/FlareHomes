import React from 'react';
import BookCard from './BookCard';

import "./books.css"

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

