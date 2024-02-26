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

module.exports = router;