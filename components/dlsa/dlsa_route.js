const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./dlsa_database_interactor");

router.post("/dlsa/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "dlsa login");
  try {
    if (username === "dlsa" && password === "dlsa") {
      result = { username: username, loggedIn: true };
      res.status(200).json(result);
    } else {
      res.status(400).send("Login failed");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dlsa/count", async (req, res) => {
  console.log("dlsa count");
  try {
    result = await databaseInteractor.getCount();
    if (result.length > 0) {
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dlsa/student/list", async (req, res) => {
  console.log("dlsa student list");
  try {
    result = await databaseInteractor.getStudentList();
    if (result.length > 0) {
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dlsa/mentor/list", async (req, res) => {
  console.log("dlsa mentor list");
  try {
    result = await databaseInteractor.getMentorList();
    if (result.length > 0) {
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/dlsa/register/mentor", async (req, res) => {
  const { username, name, email, phone, gender, address, password } = req.body;
  console.log(
    username,
    name,
    email,
    phone,
    gender,
    address,
    password,
    "dlsa register mentor"
  );

  try {
    result = await databaseInteractor.registerMentor(
      username,
      name,
      email,
      phone,
      gender,
      address,
      password
    );
    if (result.status === "Success") {
      res.status(200).send("Mentor registered successfully");
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dlsa/students", async (req, res) => {
  console.log("dlsa students");
  try {
    result = await databaseInteractor.getUnAssignedStudents();
    if (result.length > 0) {
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dlsa/mentors", async (req, res) => {
  console.log("dlsa mentors");
  try {
    result = await databaseInteractor.getUnAssignedMentors();
    if (result.length > 0) {
      res.status(200).json({ result: result });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/dlsa/assign", async (req, res) => {
  const { student, mentor } = req.body;
  console.log(student, mentor, "dlsa assign");
  try {
    result = await databaseInteractor.assign(student, mentor);
    if (result.status === "Success") {
      res.status(200).send("Assigned successfully");
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/dlsa/update/mentor", async (req, res) => {
    const { name, address, gender, email, username, phone } = req.body;
    console.log(name, address, gender, email, username, phone, "dlsa update mentor");
    try {
      result = await databaseInteractor.updateMentor(name, address, gender, email, username, phone);
        if (result.status === "Success") {
            res.status(200).send("Mentor updated successfully");
        } else {
            res.status(400).send("Error");
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
