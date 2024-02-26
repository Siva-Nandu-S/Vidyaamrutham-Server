const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./mentor_database_interactor");

router.post("/mentor/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "mentor login");
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

router.get("/mentor/student/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "mentor personal");
  try {
    result = await databaseInteractor.getStudent(id);
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/mentor/student_count/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "mentor count");
  try {
    result = await databaseInteractor.getStudentCount(id);
    if (result.length > 0) {
      console.log("result : ", result[0][0]);
      res.status(200).json({ result: result[0][0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/mentor/attendance/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "mentor attendance");
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

router.get("/mentor/content/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "mentor content");
  try {
    result = await databaseInteractor.getContent(id);
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

router.get("/mentor/profile/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id, "mentor profile");
    try {
        result = await databaseInteractor.getProfile(id);
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

router.get("/mentor/students/:grade/:section", async (req, res) => {
  const grade = req.params.grade;
  const section = req.params.section;
  console.log(grade, section, "mentor students");
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
