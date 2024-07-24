const db = require("../Database/db");

async function login(username, password) {
  try {
    const result = await db.query(
      `select * from parent_password where username like '${username}' and password like '${password}'`
    );
    if (result[0].length > 0) {
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
      ` select * from student join parent on student.username = parent.student_id where parent.username like "${id}"`
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
      `select * from attendance where student_id = '${id}'`
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
      `select * from achievement  where student_id = '${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function noteTeacher(note, id) {
  try {
    const result = await db.query(
      `insert into teacher_notes (date, parent_id, note) values (now(), '${id}', '${note}')`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function noteMentor(note, id, student_id) {
  try {

    const data = await db.query(
      `select mentor_id from student where username = '${student_id}'`
    );

    console.log("data : ", data[0][0].mentor_id);

    const result = await db.query(
      `insert into mentor_notes (date, parent_id, note, mentor_id) values (now(), '${id}', '${note}', '${data[0][0].mentor_id}')`
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
      `select * from exam where class = (select class from student where username = '${id}') and division = (select section from student where username = '${id}')`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getResult(id) {
  try {
    const result = await db.query(
      ` select * from exam_result join exam on exam_result.exam_id = exam.exam_id where exam_result.student_id = '${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getMentor(id) {
  try {
    const result = await db.query(
      ` select * from mentor join student on mentor.username=student.mentor_id where student.username='${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getRemarks(id) {
  try {
    const result = await db.query(
      ` select * from grievances where student_id = '${id}'`
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getInstructions(username){
  try {
    const result = await db.query(
      ` select * from instruction_for_parents where parent_id = '${username}'`
    );
    console.log(result[0]);
    return result[0];
  } catch (err) {
    console.log(err);
  }

}

module.exports = {
  login,
  getStudent,
  getAttendance,
  getAchievement,
  noteTeacher,
  noteMentor,
  getExams,
  getResult,
  getMentor,
  getRemarks,
  getInstructions
};
