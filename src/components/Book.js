
import React from 'react'


class Book extends React.Component {

  handleChange = (event) => {
    this.props.handleChange(this.props.book, event.target.value);
  }

	render() {

		let matchedBookID = '0'
		let matchedBookShelf = ''
	
		// search results
		// if this book matches the ID of a book in the books array, get it's ID
		if(this.props.books) {
			this.props.books.map((b) => (
				b.id === this.props.book.id ?
				  matchedBookID = b.id
				: 
					""
			))

			// Now find out what shelf it was on 
			this.props.books.map((b) => (
				b.id === matchedBookID ?
				  matchedBookShelf = b.shelf
				: 
					''
			))
		}
	
	
		return (
			<div>
				<div className="book">
	        <div className="book-top">
	          { this.props.imageLinks ? 
	          	<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
	           : ''}
	          <div className="book-shelf-changer">
	          	{ this.props.books ? 
	          		matchedBookShelf !== '' ?
	          			<select onChange={this.handleChange}
			          	defaultValue={matchedBookShelf}>
				          	<option value="none" disabled>Move to...</option>
		 	           	  <option value="currentlyReading">Currently Reading</option>
				          	<option value="wantToRead">Want to Read</option>
				          	<option value="read">Read</option>
				          	<option value="none">None</option>
			            </select>
	          		:
	          			<select onChange={this.handleChange}
			          	defaultValue='none'>
				          	<option value="none" disabled>Move to...</option>
		 	           	  <option value="currentlyReading">Currently Reading</option>
				          	<option value="wantToRead">Want to Read</option>
				          	<option value="read">Read</option>
				          	<option value="none">None</option>
			            </select>
	          	: 
	          		// homepage display
		          	<select onChange={this.handleChange}
		          	defaultValue={this.props.book.shelf ? this.props.book.shelf : 'none'}>
			          	<option value="none" disabled>Move to...</option>
	 	           	  <option value="currentlyReading">Currently Reading</option>
			          	<option value="wantToRead">Want to Read</option>
			          	<option value="read">Read</option>
			          	<option value="none">None</option>
		            </select>
		          }
	          </div>
	        </div>
	        <div className="book-title">{this.props.book.title}</div>
	        <div className="book-authors">{ this.props.book.authors ? this.props.book.authors.join(', ') : 'N/A'}</div>
	      </div>
	    </div>

		)
	}
}

export default Book
