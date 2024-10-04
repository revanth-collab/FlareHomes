import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';

const App = () => {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
};

export default App;
