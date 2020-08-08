const db = require("../models");
import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

module.exports = function(app) {
    app.get("/api/google/:books", async (req, res) => {
        await axios.get(BASEURL, req.params)
            .then(data => {
                res.json(data.data);
            });

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
    });
    app.get("/api/books", (req, res) => {
        db.Book.findall({}).then(dbBook => {
            res.json(dbBook);
        });
    });
    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(dbBook => {
            res.json(dbBook);
        });
    });
    app.delete("/api/books/:id", (req, res) => {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbBook => {
            res.json(dbBook);
        });
    });
};



