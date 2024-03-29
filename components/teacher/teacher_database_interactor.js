const db = require("../Database/db");

async function login(username, password) {
  try {
    const result = await db.query(
      `select * from teacher_password where username like '${username}' and password like '${password}'`
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

async function getClasses() {
  try {
    const result = await db.query(
      `select distinct class,section from student `
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getStudents(grade, section) {
  try {
    const result = await db.query(
      `select * from student where class = ${grade} and section = '${section}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function addAttendance(grade, section, date, attendance) {
  try {
    for (let i = 0; i < Object.keys(attendance).length; i++) {
      let data = "Present";
      if (attendance[Object.keys(attendance)[i]] === false) {
        data = "Absent";
      }
      const result = await db.query(
        `insert into attendance (class,section,student_id,status,date) values (${grade},'${section}',${
          Object.keys(attendance)[i]
        },'${data}','${date}')`
      );
    }
    result = { status: "Success" };
    return result;
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function getProfile(id) {
  try {
    const result = await db.query(
      `select * from teacher where username = '${id}'`
    );
    console.log(result);
    return result[0];
  } catch (err) {
    console.log(err);
  }
}

async function getStudentProfiles(grade, section) {
  try {
    const result = await db.query(
      `select * from parent join student on student_id = id where class = ${grade} and section = '${section}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  login,
  getClasses,
  getStudents,
  addAttendance,
  getProfile,
  getStudentProfiles,
};
