const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require('cors');
const path = require("path");

app.use(express.json());
app.use("/api", routes);
app.use(cors());

// Serve the HTML file on the home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});