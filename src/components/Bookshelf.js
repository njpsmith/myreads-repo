
import React from 'react'
import Book from './Book.js'


class Bookshelf extends React.Component {
	handleChange = (book, newBookShelf) => {
		// console.log(bookShelf);
		// console.log(bookName);		              
    this.props.handleChange(book, newBookShelf);
  }

  render() {
    return (
    	<div>
	   		<div className="bookshelf">
	        <h2 className="bookshelf-title">{this.props.title}</h2>
	        <div className="bookshelf-books">
	          <ol className="books-grid">
	          	
	          	{this.props.books.map( (book) => (
			   				<li key={book.title}>
			   					<Book
			   						handleChange={(bookShelf, bookName) => {
				              // console.log(bookShelf);
				              // console.log(bookName);
				              this.handleChange(bookShelf, bookName);
				            }}
			   						book={book}
			   						currentBookshelf={book.shelf}
			   						bookName={book.title}
			   						author={book.authors['0']}
			   						bookCover={book.imageLinks.smallThumbnail}
			   					/>
			   				</li>
			   			) )}

	          </ol>
	        </div>
	      </div>
      </div>

    )
  }
}

export default Bookshelf


