const { Router } = require("express");
const router = Router();
const db = require("../Database/db");
const databaseInteractor = require("./parent_database_interactor");

router.post("/parent/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, "parent login");
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

router.get("/parent/student/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id, "parent student");
    try {
        result = await databaseInteractor.getStudent(id);
        if(result.length > 0){
            result = result[0][0];
            res.status(200).json({result: result});
        }
        else{
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
        if(result.length > 0){
            result = result[0];
            console.log(result);
            res.status(200).json({result: result});
        }
        else{
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
        if(result.length > 0){
            result = result[0];
            console.log(result);
            res.status(200).json({result: result});
        }
        else{
            res.status(400).send("Error");
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
