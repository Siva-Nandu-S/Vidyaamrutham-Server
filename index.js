const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./components/Database/db");
const bodyParser = require("body-parser");
const parentRoute = require("./components/parent/parent_route");
const teacherRoute = require("./components/teacher/teacher_route");
const mentorRoute = require("./components/mentor/mentor_route");
const dlsaRoute = require("./components/dlsa/dlsa_route");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(parentRoute);
app.use(teacherRoute);
app.use(mentorRoute);
app.use(dlsaRoute);

app.listen(12000, () => {
  console.log("Server is running on port 3001");
});
