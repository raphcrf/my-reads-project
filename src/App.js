import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import Read from './Read'
import Search from './Search'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[]
    
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(books =>{this.setState({ books })
  })
    
}
  

  changeShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf)
  }
  
  

  render() {
    return (
      <div className="app">
      
      <Route path="/search" render={()=>(
        <Search  changeShelf ={this.changeShelf}/>
      )}/>

      <Route exact path="/" render={()=>(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading allBooks={this.state.books} changeShelf ={this.changeShelf} />
            <WantToRead allBooks={this.state.books} changeShelf={this.changeShelf}/>
            <Read allBooks={this.state.books} changeShelf={this.changeShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      )} />
        
          
        
      </div>
    )
  }
}


export default BooksApp
