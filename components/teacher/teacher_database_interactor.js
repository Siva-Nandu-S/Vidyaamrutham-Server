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

async function publishExam(name, examClass, division, date, marks, subject) {
  try {
    const result = await db.query(
      `insert into exam (name, class, division, date, marks, subject, state) values ('${name}', '${examClass}', '${division}', '${date}', ${marks}, '${subject}', 0)`
    );
    console.log(result);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function getExams() {
  try {
    const result = await db.query(`select * from exam where state=0`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function publishResult(exam_id, mark) {
  try {
    let result;
    for (let i = 0; i < Object.keys(mark).length; i++) {
      result = await db.query(
        `insert into exam_result (exam_id, student_id, mark) values (${exam_id}, ${
          Object.keys(mark)[i]
        }, ${mark[Object.keys(mark)[i]]})`
      );
    }
    console.log(result);

    result = await db.query(`update exam set state=1 where exam_id=${exam_id}`);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function getAnnouncements() {
  try {
    const result = await db.query(`select * from announcement`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function publishAnnouncement(announcement, date) {
  try {
    const result = await db.query(
      `insert into announcement (announcement,date) values ('${announcement}','${date}')`
    );
    console.log(result);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function deleteAnnouncement(announcement_id) {
  try {
    const result = await db.query(
      `delete from announcement where announcement_id=${announcement_id}`
    );
    console.log(result);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function getAssignments() {
  try {
    const result = await db.query(`select * from assignment`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function publishAssignment(
  title,
  description,
  grade,
  division,
  deadline,
  subject,
  date,
  teacher_id
) {
  try {
    const result = await db.query(
      `insert into assignment (title, description, class, division, deadline, subject, date, teacher_id) values ('${title}', '${description}', ${grade}, '${division}', '${deadline}', '${subject}', '${date}', '${teacher_id}')`
    );
    console.log(result);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

async function getSubjects() {
  try {
    const result = await db.query(`select * from teacher`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function registerStudent(
  name,
  grade,
  division,
  roll_no,
  address,
  dob,
  blood_group,
  gender,
  admission_no
) {
  try {
    const result = await db.query(
      `insert into student (name, class, section, roll_no, address, dob, blood_group, gender, admission_no) values ('${name}', ${grade}, '${division}', ${roll_no}, '${address}', '${dob}', '${blood_group}', '${gender}', ${admission_no})`
    );
    console.log(result);
    return { status: "Success" };
  } catch (err) {
    console.log(err);
    return { status: "Error" };
  }
}

module.exports = {
  login,
  getClasses,
  getStudents,
  addAttendance,
  getProfile,
  getStudentProfiles,
  publishExam,
  getExams,
  publishResult,
  getAnnouncements,
  publishAnnouncement,
  deleteAnnouncement,
  getAssignments,
  publishAssignment,
  getSubjects,
};
