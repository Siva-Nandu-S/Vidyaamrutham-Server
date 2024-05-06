const db = require("../Database/db");

async function login(username, password) {
  try {
    const result = await db.query(
      `select * from student_password where username like '${username}' and password like '${password}'`
    );
    if (result.length > 0) {
      console.log(result);
      return { username: result[0].username, loggedIn: true };
    } else {
      console.log(result);
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getStudent(id) {
  try {
    const result = await db.query(
      `select * from student join parent on parent.student_id=student.username where student.username like '${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getHome(id) {
  try {
    const result = await db.query(
      `select * from student join mentor on student.mentor_id=mentor.username where student.username='${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getHomeAttendance(id) {
  try {
    const result1 = await db.query(
      `select count(status) from attendance where student_id='${id}'`
    );
    console.log(result1);
    const result2 = await db.query(
      ` select count(status) from attendance where student_id = "${id}" and status="Present"`
    );
    console.log(result2);

    const result = {
      total: result1[0][0]["count(status)"],
      present: result2[0][0]["count(status)"],
    };
    console.log(result);

    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { 
  login,
  getStudent,
  getHome,
  getHomeAttendance,
 };
