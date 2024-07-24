const db = require("../Database/db");

async function getCount() {
  try {
    const result_student = await db.query(
      `SELECT COUNT(username) FROM student`
    );
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

async function registerMentor(
  username,
  password,
  name,
  email,
  phone,
  address,
  gender
) {
  try {
    const result1 = await db.query(
      `INSERT INTO mentor (username, mentor_name, email, phone, address, gender) VALUES ('${username}', '${name}', '${email}', '${phone}', '${address}', '${gender}')`
    );

    const result2 = await db.query(
      `INSERT INTO mentor_password (username, password) VALUES ('${username}', '${password}')`
    );

    if (result1.length > 0 && result2.length > 0) {
      return { status: "Success" };
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getUnAssignedStudents() {
  try {
    const result = await db.query(
      `SELECT * FROM student where mentor_id is NULL`
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

async function getUnAssignedMentors() {
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

async function assign(student, mentor) {
  try {
    const result = await db.query(
      `UPDATE student SET mentor_id = '${mentor}' WHERE username = '${student}'`
    );
    if (result.length > 0) {
      return { status: "Success" };
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateMentor(name, address, gender, email, username, phone) {
  try {
    const result = await db.query(
      `UPDATE mentor SET mentor_name = '${name}', address = '${address}', gender = '${gender}', email = '${email}', phone = '${phone}' WHERE username = '${username}'`
    );
    if (result.length > 0) {
      return { status: "Success" };
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCount,
  getStudentList,
  getMentorList,
  registerMentor,
  getUnAssignedStudents,
  getUnAssignedMentors,
  assign,
  updateMentor,
};
