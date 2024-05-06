const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./student_database_interactor");

router.get("/", (req, res) => {
  res.send("Student route");
});

router.post("/student/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "student login");

  try {
    result = await databaseInteractor.login(username, password);
    if (result !== "Error") {
      result = { username: username, loggedIn: true };
      res.status(200).json(result);
    } else {
      res.status(400).send("Login failed");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/student/attendance/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "student attendance");

  try {
    result = await databaseInteractor.getAttendance(id);
    if (result.length > 0) {
      result = result[0];
      console.log(result);
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/student/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "student");

  try {
    result = await databaseInteractor.getStudent(id);
    if (result.length > 0) {
      result = result[0][0];
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/student/home/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "student home");

  try {
    result = await databaseInteractor.getHome(id);
    if (result.length > 0) {
      result = result[0];
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/student/attendance/home/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "student home attendance");

  try {
    result = await databaseInteractor.getHomeAttendance(id);
    if (result !== "Error") {
      result = result;
      console.log('result', result);
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
