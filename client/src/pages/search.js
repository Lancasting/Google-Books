import React, { Component } from "react";
import API from "../utils/API.js";
import Results from "../components/results";


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
                    {this.state.books.map(book => <Results {...book} />)}
                </ul>
            </div>
        )
    }
}
export default Search;
