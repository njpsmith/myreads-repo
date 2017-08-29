
import React from 'react'


class Book extends React.Component {

  handleChange = (event) => {
    this.props.handleChange(this.props.book, event.target.value);
  }

	render() {
		return (
			<div>
				<div className="book">
	        <div className="book-top">
	          { this.props.imageLinks ? 
	          	<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
	           : ''}
	          <div className="book-shelf-changer">
	          	<select onChange={this.handleChange}
	          	defaultValue={this.props.currentBookshelf}>
		          	<option value="none" disabled>Move to...</option>
 	           	  <option value="currentlyReading">Currently Reading</option>
		          	<option value="wantToRead">Want to Read</option>
		          	<option value="read">Read</option>
		          	<option value="none">None</option>
	            </select>
	          </div>
	        </div>
	        <div className="book-title">{this.props.bookName}</div>
	        <div className="book-authors">{ this.props.authors ? this.props.authors.join(', ') : 'N/A'}</div>
	      </div>
	    </div>

		)
	}
}

export default Book
