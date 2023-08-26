import React, { useState, useEffect } from "react";
import axios from 'axios';
import Books from "./Books";

const BookDetails = ({ bookInfo, setBookList, selectedBook, showInfo }) => {

  const [results, setResults] = useState([]);



  useEffect(() => {
    if (bookInfo.length <= 0) {
      getBooksData('harry potter');
      getBooksData('Sherlock Holmes');
    }
    else {
      getBooksData(bookInfo);
    }
  }, [bookInfo])


  async function getBooksData(query) {
    console.log(`booksdata of ${query} are fetching ...`);
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?', {
        params: {
          q: query
        }
      })

      console.log(response.data.items);
      if (bookInfo.length <= 0) {
        setResults((results) => [...results, ...response.data.items]);
        setBookList((results) => [...results, ...response.data.items]);
        //    console.log('Results' ,results);
      }
      else {
        setResults(response.data.items);
        setBookList(response.data.items);
        //    console.log('Results' ,results);
      }

    }
    catch (error) {
      console.log('Error: ', error);
    }
  }


  return (
    <div className="books-container">
      {(!selectedBook && results) ?
        (<> <Books color="rgba(113, 197, 244, 0.38)" book={results[Math.floor(Math.random() * results.length)]} />
          <Books color="rgba(171, 113, 244, 0.38)" book={results[Math.floor(Math.random() * results.length)]} />
          <Books color="rgba(244, 113, 168, 0.38)" book={results[Math.floor(Math.random() * results.length)]} />
        </>) :
        <Books color="rgba(244, 113, 168, 0.38)" book={selectedBook} showInfo={showInfo} />}
    </div>

  );
}

export default BookDetails;