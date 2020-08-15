import React, { Component } from "react";
import API from "../utils/API";
import { SavedCard } from "../components/savedcard";


class Saved extends Component {
    state = {
        books: []
    }

    getBooks = () => {
        API.getBooks()
        .then(res => 
        {console.log(res);
            this.setState({ books: res })
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getBooks()
    }
    handleInputChange = (id) => {
        API.deleteBook(id)
        .then(API.getBooks())
        .catch(err => console.log(err));
    }

    componentDidUpdate() {
        console.log(this.state.books)
    }
    render() {
        return (
            <div>
            <ul className="list-group search-results">
                    {this.state.books.map(book => <SavedCard {...book} key={book.id} handleInputChange={this.handleInputChange()} />)}
            </ul>
        </div>
        )
    } 
}
export default Saved;