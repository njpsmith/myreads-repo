
import React from 'react'
import Book from './Book.js'


class Bookshelf extends React.Component {
	handleChange = (book, newBookShelf) => {
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
			   						handleChange={(bookName, bookShelf) => {
				              this.handleChange(bookName, bookShelf);
				            }}
			   						book={book}
			   						currentBookshelf={book.shelf}
			   						bookName={book.title}
			   						authors={book.authors}
			   						imageLinks={book.imageLinks}
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


