const express = require("express");

const app = express();

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
    authorId: 1,
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
    authorId: 2,
  },
];

const authors = [
  { id: 1, name: "Author One" },
  { id: 2, name: "Author Two" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

// get a specific posts
app.get("/posts/:id", (req, res) => {
  // posts/1
  const post = posts.find((p) => parseInt(p.id) === parseInt(req.params.id));
  // make sure post is available
  if (post) {
    res.status(200).json(post);
  } else {
    // error handling
    res.status(400).json({ error: "ID provided is not available" });
  }
});

// get all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

//get specific authors
app.get("/authors/:id", (req, res) => {
  // authors/1
  const author = authors.find(
    (p) => parseInt(p.id) === parseInt(req.params.id)
  );
  // make sure author is available
  if (author) {
    res.status(200).json(author);
  } else {
    // error handling
    res.status(400).json({ error: "ID provided is not available" });
  }
});

app.get("/", (req, res) => {
  res.send('<a href="/posts">posts</a><a href="/authors">Authors</a>');
});

// Start the server
app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
