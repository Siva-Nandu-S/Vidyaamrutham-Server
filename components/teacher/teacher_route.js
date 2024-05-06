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

router.post("/teacher/publish/exam", async (req, res) => {
  const { name, examClass, division, date, marks, subject } = req.body;
  console.log(name, date, marks, subject, "teacher exam");

  try {
    const result = await databaseInteractor.publishExam(
      name,
      examClass,
      division,
      date,
      marks,
      subject
    );
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher exam");
    res.status(400).send(err);
  }
});

router.get("/exams", async (req, res) => {
  try {
    const result = await databaseInteractor.getExams();
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/teacher/exams/:exam_id/result", async (req, res) => {
  const { exam_id } = req.params;
  const { mark } = req.body;
  console.log(exam_id, mark, "teacher exam result");

  try {
    const result = await databaseInteractor.publishResult(exam_id, mark);
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher exam result");
    res.status(400).send(err);
  }
});

router.get("/announcements", async (req, res) => {
  try {
    const result = await databaseInteractor.getAnnouncements();
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/teacher/announcement", async (req, res) => {
  const { announcement, date } = req.body;
  console.log(announcement, date, "teacher announcement");

  try {
    const result = await databaseInteractor.publishAnnouncement(
      announcement,
      date
    );
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher announcement");
    res.status(400).send(err);
  }
});

router.delete("/announcement/delete/:announcement_id", async (req, res) => {
  const { announcement_id } = req.params;
  console.log(announcement_id, "teacher delete announcement");

  try {
    const result = await databaseInteractor.deleteAnnouncement(announcement_id);
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher delete announcement");
    res.status(400).send(err);
  }
});

router.get("/assignments", async (req, res) => {
  try {
    const result = await databaseInteractor.getAssignments();
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/assignment", async (req, res) => {
  const {
    title,
    description,
    grade,
    division,
    deadline,
    subject,
    date,
    teacher_id,
  } = req.body;
  console.log(
    title,
    description,
    grade,
    division,
    deadline,
    subject,
    date,
    teacher_id,
    "teacher assignment"
  );

  try {
    const result = await databaseInteractor.publishAssignment(
      title,
      description,
      grade,
      division,
      deadline,
      subject,
      date,
      teacher_id
    );
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher assignment");
    res.status(400).send(err);
  }
});

router.get("/subjects", async (req, res) => {
  try {
    const result = await databaseInteractor.getSubjects();
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/teacher/register/student", async (req, res) => {
  const {
    name,
    grade,
    division,
    rollNumber,
    address,
    dob,
    bloodGroup,
    gender,
    admissionNumber,
    fatherName,
    motherName,
    fatherNumber,
    motherNumber,
    email,
    studentUsername,
    studentPassword,
    parentUsername,
    parentPassword,
  } = req.body;

  console.log(
    name,
    grade,
    division,
    rollNumber,
    address,
    dob,
    bloodGroup,
    gender,
    admissionNumber,
    fatherName,
    motherName,
    fatherNumber,
    motherNumber,
    email,
    studentUsername,
    studentPassword,
    parentUsername,
    parentPassword
  );

  try {
    const result = await databaseInteractor.registerStudent(
      name,
      grade,
      division,
      rollNumber,
      address,
      dob,
      bloodGroup,
      gender,
      admissionNumber,
      fatherName,
      motherName,
      fatherNumber,
      motherNumber,
      email,
      studentUsername,
      studentPassword,
      parentUsername,
      parentPassword
    );
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher register student");
    res.status(400).send(err);
  }
});

router.get("/teacher/update/:student_id", async (req, res) => {
  const student_id = req.params.student_id;
  console.log(student_id, "teacher update student");

  try {
    const result = await databaseInteractor.getStudentProfile(student_id);
    if (result.length > 0) {
      res.status(200).json({ result: result[0] });
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/teacher/update/student", async (req, res) => {
  const {
    name,
    grade,
    division,
    rollNumber,
    address,
    dob,
    bloodGroup,
    gender,
    admissionNumber,
    fatherName,
    motherName,
    fatherNumber,
    motherNumber,
    email,
    studentUsername,
    studentPassword,
    parentUsername,
    parentPassword,
  } = req.body;

  console.log(
    name,
    grade,
    division,
    rollNumber,
    address,
    dob,
    bloodGroup,
    gender,
    admissionNumber,
    fatherName,
    motherName,
    fatherNumber,
    motherNumber,
    email,
    studentUsername,
    studentPassword,
    parentUsername,
    parentPassword
  );

  try {
    const result = await databaseInteractor.updateStudent(
      name,
      grade,
      division,
      rollNumber,
      address,
      dob,
      bloodGroup,
      gender,
      admissionNumber,
      fatherName,
      motherName,
      fatherNumber,
      motherNumber,
      email,
      studentUsername,
      studentPassword,
      parentUsername,
      parentPassword
    );
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher register student");
    res.status(400).send(err);
  }
});

router.post("/teacher/grievance", async (req, res) => {
  const { mentor_id, grievance, id } = req.body;
  console.log(mentor_id, grievance, id, "teacher grievances");

  try {
    const result = await databaseInteractor.raiseGrievance(mentor_id, grievance, id);
    if (result.status === "Success") {
      res.status(200).json({ result: result.status });
    } else {
      res.status(400).json({ result: result.status });
    }
  } catch (err) {
    console.log(err);
    console.log("error from route file teacher grievances");
    res.status(400).send(err);
  }
});

module.exports = router;
