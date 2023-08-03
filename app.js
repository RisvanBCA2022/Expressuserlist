const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = require("./data");

app.use(bodyParser.json());

// Declare a user variable to store and manage data
let users = data;

// POST '/users' - Create a user with name, email, and username
app.get("/", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const { username, name, email } = req.body;
  newUser = { name: name, email: email, username: username };
  users.push(newUser);
  res.json(users);
});

// GET '/users' - Get all users list

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userindex = users.findIndex((user) => user.id === id);
  console.log(userindex);
  if (userindex === -1) {
    res.status(404).json({ error: "User not found" });
  } else {
    const { name, email, username } = req.body;
    users[userindex] = { ...users[userindex], name, email, username };
    res.json(users[userindex]);
  }
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userindex = users.findIndex((user) => user.id === id);
  console.log(userindex);
  if (userindex === -1) {
    res.status(404).json({ error: "User not found" });
  } else {
    const deletedUser = users.splice(userindex, 1)[0];
    res.json(deletedUser);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
