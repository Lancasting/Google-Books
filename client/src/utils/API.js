import axios from "axios";
const db = require("../models");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    getGoogleBooks: function() {
    return axios.get("/api/google/:books", async (req, res) => {
        const { data } = await axios.get(BASEURL, req.params);
        res.json(data)
    });
    },
    getBooks: function() {
    return axios.get("/api/books", (req, res) => {
        db.Book.findall({}).then(dbBook => {
            res.json(dbBook);
        });
    });
    },
    saveBooks: function() {
    axios.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(dbBook => {
            res.json(dbBook);
        });
    });
    },
    deleteBook: function() {
    axios.delete("/api/books/:id", (req, res) => {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbBook => {
            res.json(dbBook);
        });
    });
}
};



