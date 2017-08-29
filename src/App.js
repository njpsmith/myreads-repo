import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf.js'
import SearchForm from './components/Search-form.js'
import SearchResults from './components/Search-results.js'
// import escapeRegExp from 'escape-string-regexp'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'




const SHELVES = [
  {'name': 'currentlyReading', 'title': 'Currently Reading'},
  {'name': 'wantToRead', 'title': 'Want to Read'},
  {'name': 'read', 'title': 'Read'}
];

const maxResults = 20;



class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    query: "",
    searchResults: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }



  handleChange = (book, newBookShelf) => {
    let bookOnShelf = false;
    let updatedBookList = this.state.books.map(b => { 
      if (b.id === book.id && b.shelf !== newBookShelf) {  
        b.shelf = newBookShelf;
        bookOnShelf = true;
      }
      return b 
    });

    if (!bookOnShelf) {
      updatedBookList.push(book);
    }

    BooksAPI.update(book, newBookShelf).then((result) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      });
    });
  }


  userSearches = (userInput) => {
    // search in API
    if(userInput) {
      BooksAPI.search(userInput,maxResults).then((searchResults) => {
        this.setState({
          searchResults: searchResults
        })
      });
    }
  }



  render() {
    return (
      <div className="app">
        
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <SearchForm
              updateQuery={(query) => {
                this.userSearches(query);
              }}
              query={this.state.query}
            />

            <SearchResults
              handleChange={(book, newBookShelf) => {  
                this.handleChange(book, newBookShelf);
              }}
              searchResults={this.state.searchResults}
            />
          </div>
        )}/>
        

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                {SHELVES.map((shelf) => (
                  <Bookshelf key={shelf.title}
                    handleChange={(book, newBookShelf) => {  
                      this.handleChange(book, newBookShelf);
                    }}
                    title={shelf.title}
                    books={this.state.books.filter((book) => book.shelf === shelf.name)}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
