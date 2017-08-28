
import React from 'react'
import Book from './Book.js'

class SearchResults extends React.Component {




	render() {



		return (

			<div className="search-books-results">
			  <ol className="books-grid">


			  	{this.props.searchResults.map( (book) => (
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
	   						bookCover={book.imageLinks.smallThumbnail}
	   					/>
	   				</li>
	   			) )}

			  	
			  </ol>
			</div>

		)
	}
}

export default SearchResults