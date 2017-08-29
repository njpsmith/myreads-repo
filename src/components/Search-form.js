
import React from 'react'
import { Link } from 'react-router-dom'

class SearchForm extends React.Component {

	state = {
		query: ""
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
