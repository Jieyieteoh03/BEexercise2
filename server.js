const express = require("express");
const app = express();

let books = [
  {
    id: 1,
    title: "Book One",
    description: "Description of book one",
    authorId: 1,
  },
  {
    id: 2,
    title: "Book Two",
    description: "Description of book two",
    authorId: 2,
  },
];

let reviews = [
  { id: 1, text: "Amazing book!", bookId: 1 },
  { id: 2, text: "Decent read.", bookId: 2 },
];

let authors = [
  { id: 1, name: "Author One", bio: "Bio of Author One" },
  { id: 2, name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (res, req) => {
  const book = books.find((b) => parseInt(b.id) === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(400).json({ error: "ID unavailable" });
  }
});

app.get("/reviews", (req, res) => {
  res.json(reviews);
});

app.get("/reviews/:id", (res, req) => {
  const review = reviews.find(
    (r) => parseInt(r.id) === parseInt(req.params.id)
  );

  if (review) {
    res.status(200).json(review);
  } else {
    res.status(400).json({ error: "ID unavailable" });
  }
});

app.get("/authors", (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", (res, req) => {
  const author = authors.find(
    (a) => parseInt(a.id) === parseInt(req.params.id)
  );

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(400).json({ error: "ID unavailable" });
  }
});

app.get("/", (req, res) => {
  res.send(
    '<a href="/books">Books</a><a href="/reviews">Reviews</a><a href="/authors">Authors</a>'
  );
});

app.listen(5001, () => {
  console.log(`Bookstore app running on http://localhost:5001`);
});
