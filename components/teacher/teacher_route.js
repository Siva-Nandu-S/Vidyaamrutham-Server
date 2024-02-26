const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./teacher_database_interactor");

router.post("/teacher/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "teacher login");
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

router.get("/teacher/classes", async (req, res) => {
  try {
    const result = await databaseInteractor.getClasses();
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/teacher/students/:class/:section", async (req, res) => {
  const grade = req.params.class;
  const section = req.params.section;
  console.log(grade, section, "teacher students");
  try {
    const result = await databaseInteractor.getStudents(grade, section);
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/teacher/attendance", async (req, res) => {
  const { grade, section, date, attendance } = req.body;
  console.log(grade, section, date, attendance, "teacher attendance");
  console.log(typeof attendance, "attendance type");

  try {
    const result = await databaseInteractor.addAttendance(
      grade,
      section,
      date,
      attendance
    );
    console.log(result);
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher attendance");
    res.status(400).send(err);
  }
});

router.get("/teacher/profile/:username", async (req, res) => {
  const username = req.params.username;
  console.log(username, "teacher profile");
  try {
    const result = await databaseInteractor.getProfile(username);
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/teacher/student/:class/:section", async (req, res) => {
  const grade = req.params.class;
  const section = req.params.section;
  console.log(grade, section, "teacher students");
  try {
    const result = await databaseInteractor.getStudentProfiles(grade, section);
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
