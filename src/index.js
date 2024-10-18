import React from 'react';
import ReactDOM from 'react-dom';
import BookCatalog from "./components/BookCatalog";
import './kolorki.css';

const ksiegi = [
    {
        title: 'Book Title 1',
        author: 'Author 1',
        category: 'Fantasy',
        description: 'Description of book 1.',
    },
    {
        title: 'Book Title 2',
        author: 'Author 2',
        category: 'Comedy',
        description: 'Description of book 2.',
    },
    {
        title: 'Book Title 3',
        author: 'Author 3',
        category: 'Horror',
        description: 'Description of book 3.',
    },
];
const App = () => {
    return <BookCatalog ksiegi={ksiegi}/>;
};

ReactDOM.render(<App />, document.getElementById('root'));