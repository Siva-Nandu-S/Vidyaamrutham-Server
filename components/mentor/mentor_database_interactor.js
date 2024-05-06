const db = require("../Database/db");

async function login(username, password) {
  try {
    const result = await db.query(
      `SELECT * FROM mentor_password WHERE username = '${username}' AND password = '${password}'`
    );
    if (result.length > 0) {
      return "Success";
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getStudent(id) {
  try {
    const result = await db.query(
      `SELECT * FROM student WHERE mentor_id = '${id}'`
    );
    const data = result[0];
    const count = await db.query(
      `SELECT COUNT(username) FROM student WHERE mentor_id = '${id}'`
    );
    if (result.length > 0) {
      console.log("count : ", count[0][0]);
      data.push(count[0][0]);
      console.log(data);

      return result;
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getStudentCount(id) {
  try {
    const result = await db.query(
      `SELECT COUNT(id) FROM student WHERE mentor_id = '${id}'`
    );
    if (result.length > 0) {
      console.log(result[0]);
      return result;
    } else {
      return "Error";
    }
  } catch (err) {
    console.log(err);
  }
}

async function getAttendance(id) {
  try {
    const result = await db.query(
      `select * from attendance where student_id = "${id}"`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getContent(id) {
  try {
    const result = await db.query(
      `select * from parent join student on student_id = id where student_id in (select id from student where mentor_id like '${id}')`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getProfile(id) {
  try {
    const result = await db.query(
      `select * from mentor where username = '${id}'`
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
      `select * from mentor join student on mentor.username = student.mentor_id where class = ${grade} and section = '${section}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getExams(id) {
  try {
    const result = await db.query(
      `select * from exam where class = (select class from student where username = '${id}') and division = (select section from student where username = '${id}') and state = 0`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function addInstructions(instructions, id) {
  try {
    const data = await db.query(
      `select username from parent where student_id = '${id}'`
    );

    const result = await db.query(
      `insert into instruction_for_parents (date, student_id, instructions) values (now(), '${data[0]}', '${instructions}')`
    );
    console.log(result);
    return result;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  login,
  getStudent,
  getStudentCount,
  getAttendance,
  getContent,
  getProfile,
  getStudentProfiles,
  getExams,
  addInstructions,
};
