import React, { useEffect, useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if ((book.id = id)) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };
  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
