const express = require("express");
const app = express();
const cors = require("cors");
const localtunnel = require("localtunnel");
const db = require("./components/Database/db");
const bodyParser = require("body-parser");
const parentRoute = require("./components/parent/parent_route");
const teacherRoute = require("./components/teacher/teacher_route");
const mentorRoute = require("./components/mentor/mentor_route");
const dlsaRoute = require("./components/dlsa/dlsa_route");
const studentRoute = require("./components/student/student_route");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(parentRoute);
app.use(teacherRoute);
app.use(mentorRoute);
app.use(dlsaRoute);
app.use(studentRoute);

const server = app.listen(3001, () => {
  console.log("Server is running on port 3002");

  (async () => {
    const tunnel = await localtunnel({
      port: 3001,
      subdomain: "dlsatestserver",
    });

    console.log(`Server is accessible publicly at ${tunnel.url}`);
  })();
});
