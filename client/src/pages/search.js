import React, { Component } from "react";
import API from "../utils/API.js";
import { Card } from "../components/searchcard/index.js";


class Search extends Component {
    state = {
        search: "",
        books: []
    }

    handleInputChange = (event) => {
        event.preventDefault();
        API.getGoogleBooks(this.state.search)
        .then(res => this.setState({books: res.data.items}))
        .catch(err => console.log(err));
    }

    saveBook = (id) => {
        let savedBook = this.state.books.find((book) => book.id === id);
        API.saveBook({
            id: savedBook.id,
            authors: savedBook.volumeInfo.authors,
            description: savedBook.volumeInfo.description,
            img: savedBook.volumeInfo.imageLinks.smallThumbnail,
            link: savedBook.volumeInfo.infoLink,
            title: savedBook.volumeInfo.title,
        })
        // .then(console.log("Book saved!"))
        // .catch(err => console.log(err));
    }

    componentDidUpdate() {
        console.log(this.state.books)
    }

    render() {

        return (
            <div>
                <form>
                    <label>
                        Search for Book:
                    <input type="text" name="Book" onChange={(event) => this.setState({search: event.target.value})} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleInputChange} />
                </form>
                <ul className="list-group search-results">
                    {this.state.books.map(book => <Card {...book} key={book.id}  saveBook = {() => this.saveBook(book.id)} />)}
                </ul>
            </div>
        )
    }
}
export default Search;
