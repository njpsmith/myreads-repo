
import React from 'react'
import Book from './Book.js'

class SearchResults extends React.Component {

	handleChange = (book, newBookShelf) => {	              
    this.props.handleChange(book, newBookShelf);
  }


	render() {
		return (

			<div className="search-books-results">
			  <ol className="books-grid">


				  	{(Array.isArray(this.props.searchResults) && this.props.searchResults.map( (book) => (
		   				<li key={book.id}>
		   					<Book
		   						handleChange={(bookName, bookShelf) => {
			              this.handleChange(bookName, bookShelf);
			            }}
			            books={this.props.books}
		   						book={book}
		   						imageLinks={book.imageLinks}
		   					/>
		   				</li>
		   			) )) || 'No books found!'}

			  	
			  </ol>
			</div>

		)
	}
}

export default SearchResults