import React, { Component } from "react";
import API from "../utils/API.js";
import { SavedCard } from "../components/savedcard";


class Saved extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({books: res.data.items}))
    }
    handleInputChange3 = (id) => {
        API.deleteBook(id)
        .then(res => API.getBooks())
        .catch(err => console.log(err));
    }

    componentDidUpdate() {
        console.log(this.state.books)
    }
    render() {
        return (
            <div>
            <ul className="list-group search-results">
                    {this.state.books.map(book => <SavedCard {...book} handleInputChange={this.handleInputChange()} />)}
            </ul>
        </div>
        )
    } 

}
export default Saved;