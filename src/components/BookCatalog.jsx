import React, { useState } from 'react';
import AddBook from "./AddBook";
import '../kolorki.css';

const BookCatalog = ({ ksiegi }) => {
    const [books, setBooks] = useState(ksiegi || []);
    const [filter, setFilter] = useState("None");

    const filteredBooks = filter === "None" ? books : books.filter(book => book.category === filter);

    const handleAddBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    return (
        <div>
            <AddBook dodaj={handleAddBook} />

            <h1>Książki</h1>
            <label>
                Kategoria:
                <select name="selectedCategory" onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="None">None</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                </select>
            </label>

            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <h2>{book.title}</h2>
                        <p>Autor: {book.author}</p>
                        <p>Kategoria: {book.category}</p>
                        <p>Opis: {book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookCatalog;