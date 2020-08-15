const router = require("express").Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
    db.Book.find({}).then(dbBook => {
        res.json(dbBook);
    });
});


router.post("/api/books", (req, res) => {
    db.Book.create(req.body).then(dbBook => {
        res.json(dbBook);
    });
});


router.delete("/api/books/:id", (req, res) => {
    db.Book.deleteOne({
        where: {
            id: req.params.id
        }
    }).then(dbBook => {
        res.json(dbBook);
    });
});

module.exports = router;