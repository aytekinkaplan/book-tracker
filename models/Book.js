const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    collection: "books",
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
