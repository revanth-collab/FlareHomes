const API_URL = "http://localhost:3001/api/books";

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};
