const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGOURI || "mongodb://localhost/google_books",
  );
