import React from 'react';
import { Link } from 'react-router-dom';

import "./books.css"

const BookCard = ({ book }) => {
  const {title,author,genre,rating} =book
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
