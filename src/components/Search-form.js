
import React from 'react'
import { Link } from 'react-router-dom'

class SearchForm extends React.Component {

	state = {
		
	}


	onUserInput = (query) => {
		this.setState({ query: query.trim() });
		this.props.updateQuery(query);
	}



	render() {
		const { query } = this.state

		return (
			<div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        
				<div className="search-books-input-wrapper">
	        {/* 
	          NOTES: The search from BooksAPI is limited to a particular set of search terms.
	          You can find these search terms here:
	          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
	          
	          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	          you don't find a specific author or title. Every search is limited by search terms.
	        */}

	        <input 
	        	type="text" 
	        	placeholder="Search by title or author"
	        	value={query}
   			  	onChange={ (event) => this.onUserInput(event.target.value) }
	        />
	      </div>
	    </div>
		)
	}
}

export default SearchForm
