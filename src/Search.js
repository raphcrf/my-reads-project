import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends Component{
    
    state = {
        query:'Type here the book you want to search',
        books:[]
    }


    searchBooks = (query) =>{
      console.log(query.target.value)
      this.state.query === undefined && this.setState({query:'Type the book you want to search'})
      this.setState({query:query.target.value})
  
      BooksAPI.search(query.target.value, 20).then((books) =>{
          console.log(books)
          this.setState({books})
        console.log(this.state.books)
      })
      console.log(this.state.books)
      
     }



    render(){
        return(
            <div className="search-books">
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
                value={this.state.query}
                type="text" 
                onChange={this.searchBooks}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((book)=>{
                  return(
                    <li key={book.id}> 
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}></div>
                        <div className="book-shelf-changer">
                          <select onChange={(event)=>{this.props.changeShelf(book, event.target.value)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                  )
                })}

              </ol>
            </div>
          </div>
        )
    }
}
export default Search