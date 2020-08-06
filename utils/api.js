import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

module.exports = {
    search: function (req, res) {
        axios.get(BASEURL, req.params)
            .then(
                
            )
            // .then(
            //     result => {
            //         result.data.items.filter(data => {
            //                 data.volumeInfo.title &&
            //                 data.volumeInfo.authors &&
            //                 data.volumeInfo.description &&
            //                 data.volumeInfo.infoLink &&
            //                 data.volumeInfo.imageLink &&
            //                 data.volumeInfo.imageLinks.thumbnail
            //         });
            //     }
            // ).then(books => res.json(books)
            // ).catch(err => res.json(err)
            // )
    }

}



// https://www.googleapis.com/books/v1/volumes?q=search+terms