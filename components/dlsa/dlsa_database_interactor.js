const db = require("../Database/db");

async function getCount() {
  try {
    const result_student = await db.query(`SELECT COUNT(id) FROM student`);
    const result_mentor = await db.query(`SELECT COUNT(username) FROM mentor`);

    if (result_student.length > 0 && result_mentor.length > 0) {
      return [result_student[0][0], result_mentor[0][0]];
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getStudentList() {
  try {
    const result = await db.query(
      `SELECT * FROM student join mentor on student.mentor_id = mentor.username`
    );
    if (result.length > 0) {
      return result[0];
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getMentorList() {
  try {
    const result = await db.query(`SELECT * FROM mentor`);
    if (result.length > 0) {
      return result[0];
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getCount, getStudentList, getMentorList };
