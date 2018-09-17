import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Read extends Component{


    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                    {this.props.allBooks.map((book)=>{
                        return(
                            book.shelf === 'read' && (
                                <li key={book.id}>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
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
                            
                        )
                         
                    })}
                     
                      
                    </ol>
                  </div>
                </div>
        )
    }
}
export default Read