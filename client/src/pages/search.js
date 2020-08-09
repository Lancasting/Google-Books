import React, { Component } from "react";
import API from "../utils/API.js";


class Search extends Component {
    state = {
        search: "",
        results: []
    }
    useEffect() {
        API.getBooks()
            .then(res => this.setState({
                books: res.data.results
            })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            search: event.target.value
        })
    }

    render() {

        return (
            <div>
                <form>
                    <label>
                        Search for Book:
        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" onClick={() => this.handleInputChange()} />
                </form>
            </div>
        )
    }
}
export default Search;
