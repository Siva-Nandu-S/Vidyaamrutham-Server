const db = require("../Database/db");

async function login(username, password) {
  try {
    const result = await db.query(
      `select * from parent_password where username like '${username}' and password like '${password}'`
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
      ` select * from student join parent on student.id = parent.student_id where username like "${id}"`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getAttendance(id) {
  try {
    const result = await db.query(
      `select * from attendance where student_id = ${id}`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getAchievement(id) {
  try {
    const result = await db.query(
      `select * from achievement  where student_id = ${id}`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }

}

module.exports = {
  login,
  getStudent,
  getAttendance,
  getAchievement,
};
