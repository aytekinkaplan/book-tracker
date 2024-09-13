const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Kitapları Listeleme
router.get("/", async (req, res) => {
  const books = await Book.find().lean();
  res.render("index", { books });
});

// Yeni Kitap Ekleme
router.post("/add", async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.redirect("/books");
  }
  const newBook = new Book({ title, author });
  await newBook.save();
  res.redirect("/books");
});

// Kitap Silme
router.get("/delete/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/books");
});

module.exports = router;
