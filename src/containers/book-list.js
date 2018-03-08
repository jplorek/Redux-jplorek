import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  redentList() {
    return this.prop.books.map((books) => {
      return(
        <li key={book.title} className = "list-group-item" > {bool.title} </li>
      );
    });
  }

   render(){
     return(
       <ul className = "list-group col-sm-4">
        {this.renderList()}
       </ul>
     );
   }
}

function mapStateToProp(state){
 return{  
   books: state.books
 };
}

export default connect(mapStateToProp)(BookList);
