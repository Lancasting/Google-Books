import React from "react";
import Results from "../components/results";

function Search() {
    return (
        <div>
        <form>
            <label>
                Search for Book:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
        {/* <Results /> */}
        </div>
    )
}
export default Search;