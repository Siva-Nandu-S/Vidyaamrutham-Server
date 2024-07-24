const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./parent_database_interactor");

router.post("/parent/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "parent login");
  try {
    result = await databaseInteractor.login(username, password);
    console.log(result);
    if (result != "Error") {
      result = { username: username, loggedIn: true };
      res.status(200).json(result);
    } else {
      res.status(400).send("Login failed");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/parent/student/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent student");
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

router.get("/parent/attendance/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent attendance");
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

router.get("/parent/achievements/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent achievement");
  try {
    result = await databaseInteractor.getAchievement(id);
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

router.post("/parent/note/teacher", async (req, res) => {
  const { note, username } = req.body;
  console.log(note, username, "parent note teacher");
  try {
    result = await databaseInteractor.noteTeacher(note, username);
    if (result !== "Error") {
      res.status(200).json(result);
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/parent/note/mentor", async (req, res) => {
  const { note, username, student_id } = req.body;
  console.log(note, username, student_id, "parent note mentor");
  try {
    result = await databaseInteractor.noteMentor(note, username, student_id);
    if (result !== "Error") {
      res.status(200).json(result);
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/parent/exams/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent exams");
  try {
    result = await databaseInteractor.getExams(id);
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

router.get("/parent/result/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent result");
  try {
    result = await databaseInteractor.getResult(id);
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

router.get("/parent/mentor/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent mentor");
  try {
    result = await databaseInteractor.getMentor(id);
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

router.get("/parent/remarks/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "parent remarks");
  try {
    result = await databaseInteractor.getRemarks(id);
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

router.get("/parent/instructions/:username", async(req, res) => {
  const username = req.params.username;
  console.log(username, "parent instructions");
  try {
    let result = await databaseInteractor.getInstructions(username);

    console.log(result);

    res.status(200).json({ result: result });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
});

module.exports = router;
