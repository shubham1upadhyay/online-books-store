import React from 'react'

const Books = ({ color, book, showInfo }) => {


  // function randomColor(){
  //     const colorArr=['rgba(113, 197, 244, 0.38)','rgba(171, 113, 244, 0.38)','rgba(244, 113, 168, 0.38)'];
  //    return colorArr[Math.floor(Math.random()*colorArr.length)]
  // }

  const bookStyle = {
    width: "100%"
  }
  const bookImgStyle = {
    width: "20%",
    height: "220.22px"
  }
  const descStyle = {
    width: "100%",
    alignItems: 'normal'
  }

  return (
    <>
      {(!showInfo && book) ?
        (
          <div className="books">
            <div className="book-image">
              <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo && book.volumeInfo.subtitle} />
            </div>
            <div className="book-desc" style={{ backgroundColor: `${color}` }}>
              <h1>{book.volumeInfo && book.volumeInfo.title.slice(0, 30)}...</h1>
              <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 120) : 'Description not available'}...</p>
              <button className="read-btn" onClick={() => window.open(book.volumeInfo.previewLink)} >Now Read</button>
            </div>
          </div>
        ) : (showInfo && book) ?
          (<div className='books' style={bookStyle}>
            <div className="book-image" style={bookImgStyle}>
              <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo && book.volumeInfo.subtitle} />
            </div>
            <div className="book-desc" style={{ backgroundColor: `${color}`, ...descStyle }}>
              <h1>{book.volumeInfo && book.volumeInfo.title}</h1>
              <div className='additional-details-1'>
                <p>{book.volumeInfo && book.volumeInfo.authors}</p>
                <span>Published On : {book.volumeInfo && book.volumeInfo.publishedDate}</span>
              </div>
              <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 250) : 'Description not available'}...</p>
              <div className='additional-details-2'>
                <span>Avg Rating : {book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 'NA'}</span>
                <span>Rating Count : {book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : 'NA'}</span>
                <span>Publisher : {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'NA'}</span>
                <span>Language : {book.volumeInfo.language ? book.volumeInfo.language : 'NA'}</span>
              </div>
              <div className="btns">
                <button onClick={() => window.open(book.volumeInfo.previewLink)}>Now Read!</button>
                <button onClick={() => window.open(book.volumeInfo.infoLink)}>More Info!</button>
              </div>

            </div>
          </div>) : null
      }
    </>

  )
}

export default Books;