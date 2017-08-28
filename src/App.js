import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf.js'
import SearchForm from './components/Search-form.js'
import SearchResults from './components/Search-results.js'
import escapeRegExp from 'escape-string-regexp'
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
    searchResults: ""
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }



  handleChange = (book, newBookShelf) => {
    const updatedBookList = this.state.books.map(b => { 
      if (b.id === book.id && b.shelf !== newBookShelf) {  
        b.shelf = newBookShelf;
      } else { 
        b.shelf = b.shelf;
      }
      return b 
    })

    this.setState({
      books: updatedBookList
    });
    BooksAPI.update(book, newBookShelf);
  }


  userSearches = (userInput) => {
    // console.log(userInput);
    // search in API
    // this.state.query = BooksAPI.search(userInput, maxResults);
    if(userInput) {
      BooksAPI.search(userInput,maxResults).then((searchResults) => {
        this.setState({
          books: searchResults
        })
      });
    }
    // console.log(this.state.searchResults);
  }



  render() {
    // BooksAPI.getAll().then(response => console.log(response))
    // const { query } = this.state;
    
    // let searchResults
    // if (query) {
      // const match = new RegExp(escapeRegExp(query), 'i');
      // searchResults = this.state.books.filter((book) => match.test(book.title));
      // this.setState(searchResults: searchResultsTemp);
      // console.log(searchResults);
      // const searchResultsBookTitles = searchResults.map((book) => book.title)
      // console.log(searchResultsBookTitles);
    // } else {
      // searchResults = books
    // }
    


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
              searchResults={this.state.books}
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
                      // console.log(bookShelf);
                      // console.log(bookName);
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
