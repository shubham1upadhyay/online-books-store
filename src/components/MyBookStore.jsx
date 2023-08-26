import React, { useState } from 'react';
import './style.css';
import Navbar from './Navbar';
import BookDetails from './BookDetails';
import BookList from './BookList';

const MyBookStore = () => {

  const [bookInfo, setBookInfo] = useState('');
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='container'>

      <Navbar setBookInfo={setBookInfo} />
      <main>
        <BookDetails bookInfo={bookInfo} setBookList={setBookList} selectedBook={selectedBook} showInfo={showInfo} />
        <BookList list={bookList} setSelectedBook={setSelectedBook} setShowInfo={setShowInfo} />
      </main>
    </div>
  );
}

export default MyBookStore;