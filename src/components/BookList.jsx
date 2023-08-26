import React from 'react';


const BookList = ({ list, setSelectedBook, setShowInfo }) => {


  function getBookInfo(book) {
    setSelectedBook(book);
    setShowInfo(true);
  }

  console.log('list: ', list);
  return (
    <div className='book-list-container'>
      <h1>More Books : </h1>
      <div className='book-list'>
        {list.length > 0 && list.map((book) => {
          return (<div className="image" onClick={() => getBookInfo(book)}>
            <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.subtitle && book.volumeInfo.subtitle.slice(0, 10)} />
          </div>)
        })}
      </div>
    </div>
  );
}

export default BookList;