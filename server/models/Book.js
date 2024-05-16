const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    // id: {
    //     type: String,
    //     required: true
    // },
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    infoLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
