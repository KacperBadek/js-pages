import React from 'react'
import {useState} from 'react';

const AddBook = ({dodaj}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {title, author, category, description}
        dodaj(newBook);
        setTitle('');
        setAuthor('');
        setCategory('');
        setDescription('');
    }

    return (
        <div>
            <h1>Dodaj książke</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={title}
                       onChange={(e) => setTitle(e.target.value)}/><br/>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" value={author}
                       onChange={(e) => setAuthor(e.target.value)}/><br/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={category}
                       onChange={(e) => setCategory(e.target.value)}/><br/>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={description}
                       onChange={(e) => setDescription(e.target.value)}/><br/>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}
export default AddBook