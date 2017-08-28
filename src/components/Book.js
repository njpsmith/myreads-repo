
import React from 'react'


class Book extends React.Component {

  handleChange = (event) => {
    // console.log(this.props.book);
    this.props.handleChange(this.props.book, event.target.value);
  }

	render() {
		// console.log(this.props.currentBookshelf)

		return (
			<div>
				<div className="book">
	        <div className="book-top">
	          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.bookCover})` }}></div>
	          <div className="book-shelf-changer">
	          	<select onChange={this.handleChange}>
		          	<option value="none" disabled>Move to...</option>
		          	{ this.props.currentBookshelf === 'currentlyReading' ? 
		          	 <option selected value="currentlyReading">Currently Reading</option>
		          	:
		          	 <option value="currentlyReading">Currently Reading</option>
		          	}

		          	{ this.props.currentBookshelf === 'wantToRead' ? 
		          	 <option selected value="wantToRead">Want to Read</option>
		          	:
		          	 <option value="wantToRead">Want to Read</option>
		          	}

		          	{ this.props.currentBookshelf === 'read' ? 
		          	 <option selected value="read">Read</option>
		          	:
		          	 <option value="read">Read</option>
		          	}

		          	{ this.props.currentBookshelf === 'none' ? 
		          	 <option selected value="none">None</option>
		          	:
		          	 <option value="none">None</option>
		          	}
	            </select>
	          </div>
	        </div>
	        <div className="book-title">{this.props.bookName}</div>
	        <div className="book-authors">{this.props.author}</div>
	      </div>
	    </div>

		)
	}
}

export default Book
