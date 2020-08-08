import React from "react";

function Search() {
    return (
        <form>
            <label>
                Search for Book:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
}
export default Search;