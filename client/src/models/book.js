const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    authors: { type: String, required: true },
    description: String,
    img: { data: Buffer, contentType: String },
    link: String,
    title:  String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;