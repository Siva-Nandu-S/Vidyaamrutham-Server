const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./components/Database/db");
const bodyParser = require("body-parser");
const parentRoute = require("./components/Parent/parent_route");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    preflightContinue: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(parentRoute);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
