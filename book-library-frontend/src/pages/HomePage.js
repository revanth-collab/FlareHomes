import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/bookService';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setFilteredBooks(data);
    };

    loadBooks();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(lowercasedQuery) ||
      book.author.toLowerCase().includes(lowercasedQuery) ||
      book.genre.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
