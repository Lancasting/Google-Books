import React, { Component } from "react";
import API from "../utils/API";
import { SavedCard } from "../components/savedcard";


class Saved extends Component {
    state = {
        books: []
    }

    getBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res);
                this.setState({ books: res })
            }).catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getBooks()
    }
    handleDelete = (_id) => {
        console.log(_id);
        API.deleteBook(_id)
            .then(API.getBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    {this.state.books.map(book => <SavedCard {...book} key={book.id} onClick={() => this.handleDelete(book.id)} />)}
                </div>
                </div>
            </div>
        )
    }
}
export default Saved;