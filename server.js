const express = require("express");
const app = express();
const PORT = 3000;

// Hello route
app.get("/", (req, res) => {
  res.send("This is server update1.0.1");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Hello route
app.get("/hello", (req, res) => {
  res.send("Hello");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
