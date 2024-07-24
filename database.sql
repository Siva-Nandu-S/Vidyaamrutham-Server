drop database if exists vidyaamrutham;
create database vidyaamrutham;

use vidyaamrutham;

create table mentor(
    username varchar(100) primary key,
    mentor_name varchar(100) not null,
    phone varchar(100) not null,
    address varchar(100) not null,
    email varchar(100) not null,
    gender varchar(100) not null
);

create table mentor_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    foreign key(username) references mentor(username)
);

create table student(
    username varchar(100) primary key,
    name varchar(100) not null,
    class varchar(100) not null,
    section varchar(100) not null,
    roll_no int not null,
    dob date not null,
    blood_group varchar(100) not null,
    gender varchar(100) not null,
    admission_no int not null,
    mentor_id varchar(100),
    foreign key(mentor_id) references mentor(username)
);

create table student_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    foreign key(username) references student(username)
);

create table parent(
    username varchar(100) primary key,
    father_name varchar(100),
    mother_name varchar(100),
    father_phone varchar(100),
    mother_phone varchar(100) not null,
    address varchar(100) not null,
    email varchar(100) ,
    student_id varchar(100) not null,
    foreign key(student_id) references student(username)
);

create table parent_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    foreign key(username) references parent(username)
);

create table teacher(
    username varchar(100) primary key,
    name varchar(100) not null,
    phone varchar(100) not null,
    subject varchar(100) not null,
    email varchar(100) not null,
    address varchar(100) not null
);

create table teacher_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    foreign key(username) references teacher(username)
);

create table attendance(
    student_id varchar(100) not null,
    date date not null,
    class varchar(100) not null, 
    section varchar(100) not null,
    status varchar(100) not null,
    primary key(student_id, date),
    foreign key(student_id) references student(username)
);

create table achievement(
    student_id varchar(100) not null,
    date date not null,
    achievement varchar(100) not null,
    position int not null,
    primary key(student_id, date),
    foreign key(student_id) references student(username)
);

create table exam(
    exam_id int primary key auto_increment,
    name varchar(100) not null,
    class varchar(100) not null,
    division varchar(100) not null,
    date varchar(100) not null,
    subject varchar(100) not null,
    state int not null,
    marks int not null
);

create table exam_result(
    student_id varchar(100) not null,
    exam_id int not null,
    mark int not null,
    primary key(student_id, exam_id),
    foreign key(student_id) references student(username),
    foreign key(exam_id) references exam(exam_id)
);

create table announcement(
    announcement_id int primary key auto_increment,
    date date not null,
    announcement varchar(255) not null
);

create table assignment(
    assigment_id int primary key auto_increment,
    date date not null,
    subject varchar(100) not null,
    class varchar(100) not null,
    division varchar(100) not null,
    teacher_id varchar(100) not null,
    title varchar(100) not null,
    description varchar(255) not null,
    deadline date not null
);

create table teacher_notes(
    notes_id int primary key auto_increment,
    date date not null,
    parent_id varchar(100) not null,
    note varchar(1000) not null,
    foreign key(parent_id) references parent(username)
);

create table mentor_notes(
    notes_id int primary key auto_increment,
    date date not null,
    parent_id varchar(100) not null,
    mentor_id varchar(100) not null,
    note varchar(1000) not null,
    foreign key(parent_id) references parent(username),
    foreign key(mentor_id) references mentor(username)
);

create table grievances(
    grievance_id int primary key auto_increment,
    date date not null,
    mentor_id varchar(100) not null,
    student_id varchar(100) not null,
    grievance varchar(1000) not null,
    foreign key(mentor_id) references mentor(username),
    foreign key(student_id) references student(username)
);

create table instruction_for_parents(
    instruction_id int primary key auto_increment,
    date date not null,
    parent_id varchar(100) not null,
    instruction varchar(1000) not null,
    foreign key(parent_id) references parent(username)
);

create table letter_to_teacher(
    letter_id int primary key auto_increment,
    date date not null,
    teacher_id varchar(100) not null,
    mentor_id varchar(100) not null,
    letter varchar(1000) not null,
    foreign key(teacher_id) references teacher(username),
    foreign key(mentor_id) references mentor(username)
);


insert into mentor values
('mentor1', 'Rahul Srivastava', '1234567890', 'Delhi', 'rahul@gmail', 'male'),
('mentor2', 'Rohit Srivastava', '1234567890', 'Delhi', 'rohit123@yahoo', 'male'),
('mentor3', 'Raj Srivastava', '1234567890', 'Delhi', 'raj2003@gmail', 'male'),
('mentor4', 'Riya Srivastava', '1234567890', 'Delhi', 'riya2003@gmail', 'female'),
('mentor5', 'Rani Srivastava', '1234567890', 'Delhi', 'rani2003@gmail', 'female'),
('mentor6', 'Anooj Srivastava', '1234567890', 'Delhi', 'anooj2003@gmail', 'male'),
('mentor7', 'Aparna Srivastava', '1234567890', 'Delhi', 'aparna@gmail', 'female');

insert into mentor_password values
('mentor1', 'mentor1'),
('mentor2', 'mentor2'),
('mentor3', 'mentor3'),
('mentor4', 'mentor4'),
('mentor5', 'mentor5'),
('mentor6', 'mentor6'),
('mentor7', 'mentor7');

insert into student values ('student1', 'Rahul', '10', 'A', 20, '2000-01-01', 'O+ve', 'male', 1001, 'mentor1'),
('student2', 'Rohit', '10', 'A', 21, '2000-01-12', 'O+ve', 'male', 1002, 'mentor2'),
('student3', 'Raj', '10', 'A', 22, '2000-01-23', 'AB-', 'male', 1003, 'mentor3'),
('student4', 'Riya', '10', 'A', 23, '2000-01-21', 'O+ve', 'female', 1004, 'mentor4'),
('student5', 'Rani', '10', 'A', 24, '2000-01-28', 'B+', 'female', 1005, 'mentor5');

insert into student values ('student6', 'Danny', '10', 'B', 25, '2000-01-01', 'O+ve', 'male', 1006, 'mentor1'),
('student7', 'Rahul', '10', 'B', 26, '2000-01-12', 'O-ve', 'male', 1007, 'mentor2'),
('student8', 'Rohit', '10', 'B', 27, '2000-01-23', 'AB+ve', 'male', 1008, 'mentor6'),
('student9', 'Raj', '10', 'B', 28, '2000-01-21', 'O+ve', 'male', 1009, 'mentor4'),
('student10', 'Riya', '10', 'B', 29, '2000-01-28', 'B-ve', 'female', 1010, 'mentor7');

insert into student (username, name, class, section, roll_no, dob, blood_group, gender, admission_no) values ('student11', 'Rani', '10', 'B', 30, '2000-01-28', 'O+ve', 'female', 1011);

insert into student (username, name, class, section, roll_no, dob, blood_group, gender, admission_no) values ('student12', 'Akshay R S', '10', 'B', 30, '2000-01-28', 'O+ve', 'male', 1012);

insert into student_password values('student6', 'danny123'),
('student7', 'rahul123'),
('student8', 'rohit123'),
('student9', 'raj123'),
('student10', 'riya123');

insert into student_password values('student1', 'rahul123'),
('student2', 'rohit123'),
('student3', 'raj123'),
('student4', 'riya123'),
('student5', 'rani123');

insert into parent values
('rahul123', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rahul@gmail.com', 'student1'),
('rohit123', 'Rohit Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rohit123@emial.com', 'student2'),
('raj123', 'Raj Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rani2003@yahoo.in', 'student3'),
('riya123', 'Riya Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'riya@hotmails.com', 'student4'),
('rani123', 'Raman Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'raman@google.com', 'student5');

insert into parent_password values
('rahul123', 'rahul123'),
('rohit123', 'rohit123'),
('raj123', 'raj123'),
('riya123', 'riya123'),
('rani123', 'rani123');

insert into parent values
('danny123', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'danny@gmail', 'student6'),
('rahul12344', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rahul@yahoo', 'student7'),
('rohit12344', 'Rohit Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rohit123@gmail', 'student8'),
('raj12344', 'Raj Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'raj2003@gmail', 'student9'),
('riya12344', 'Riya Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'riya2003@gmail', 'student10');

insert into parent_password values
('danny123', 'danny123'),
('rahul12344', 'rahul123'),
('rohit12344', 'rohit123'),
('raj12344', 'raj123'),
('riya12344', 'riya123');

insert into teacher values
('teacher1', 'Rahul Srivastava', '1234567890', 'Maths', 'rahul@gmail', 'Delhi'),
('teacher2', 'Rohit Srivastava', '1234567890', 'Science', 'rohit123@yahoo', 'Delhi'),
('teacher3', 'Raj Srivastava', '1234567890', 'English', 'raj2003@gmail', 'Delhi'),
('teacher4', 'Riya Srivastava', '1234567890', 'Hindi', 'riya2003@gmail', 'Delhi'),
('teacher5', 'Rani Srivastava', '1234567890', 'Social', 'rani2003@gmail', 'Delhi');

insert into teacher_password values
('teacher1', 'teacher1'),
('teacher2', 'teacher2'),
('teacher3', 'teacher3'),
('teacher4', 'teacher4'),
('teacher5', 'teacher5');

insert into attendance values
('student1', '2021-01-01', '10', 'A', 'Present'),
('student2', '2021-01-01', '10', 'A', 'Present'),
('student3', '2021-01-01', '10', 'A', 'Absent'),
('student4', '2021-01-01', '10', 'A', 'Present'),
('student5', '2021-01-01', '10', 'A', 'Absent'),
('student1', '2021-01-02', '10', 'A', 'Present'),
('student2', '2021-01-02', '10', 'A', 'Present'),
('student3', '2021-01-02', '10', 'A', 'Absent'),
('student4', '2021-01-02', '10', 'A', 'Present'),
('student5', '2021-01-02', '10', 'A', 'Absent'),
('student1', '2021-01-03', '10', 'A', 'Present'),
('student2', '2021-01-03', '10', 'A', 'Absent'),
('student3', '2021-01-03', '10', 'A', 'Present'),
('student4', '2021-01-03', '10', 'A', 'Present'),
('student5', '2021-01-03', '10', 'A', 'Present'),
('student1', '2021-01-04', '10', 'A', 'Absent'),
('student2', '2021-01-04', '10', 'A', 'Present'),
('student3', '2021-01-04', '10', 'A', 'Absent'),
('student4', '2021-01-04', '10', 'A', 'Present'),
('student5', '2021-01-04', '10', 'A', 'Present');

insert into attendance values
('student6', '2021-01-01', '10', 'B', 'Present'),
('student7', '2021-01-01', '10', 'B', 'Present'),
('student8', '2021-01-01', '10', 'B', 'Absent'),
('student9', '2021-01-01', '10', 'B', 'Present'),
('student10', '2021-01-01', '10', 'B', 'Absent'),
('student6', '2021-01-02', '10', 'B', 'Present'),
('student7', '2021-01-02', '10', 'B', 'Present'),
('student8', '2021-01-02', '10', 'B', 'Absent'),
('student9', '2021-01-02', '10', 'B', 'Present'),
('student10', '2021-01-02', '10', 'B', 'Absent'),
('student6', '2021-01-03', '10', 'B', 'Present'),
('student7', '2021-01-03', '10', 'B', 'Absent'),
('student8', '2021-01-03', '10', 'B', 'Present'),
('student9', '2021-01-03', '10', 'B', 'Present'),
('student10', '2021-01-03', '10', 'B', 'Present'),
('student6', '2021-01-04', '10', 'B', 'Absent'),
('student7', '2021-01-04', '10', 'B', 'Present'),
('student8', '2021-01-04', '10', 'B', 'Absent'),
('student9', '2021-01-04', '10', 'B', 'Present'),
('student10', '2021-01-04', '10', 'B', 'Present');

insert into achievement values
('student1', '2021-01-01', 'First in Maths', 1),
('student2', '2021-01-01', 'First in Science', 1),
('student3', '2021-01-01', 'First in English', 1),
('student4', '2021-01-01', 'First in Hindi', 1),
('student5', '2021-01-01', 'First in Social', 1);

insert into announcement values
(1, '2021-01-01', 'School will remain closed on 2nd January'),
(2, '2021-01-02', 'School will remain closed on 3rd January'),
(3, '2021-01-03', 'School will remain closed on 4th January'),
(4, '2021-01-04', 'School will remain closed on 5th January'),
(5, '2021-01-05', 'School will remain closed on 6th January');

insert into assignment values 
(1, '2021-01-01', 'Maths', '10', 'A', 'teacher1', 'Algebra', 'Solve the given questions', '2021-01-10'),
(2, '2021-01-01', 'Science', '10', 'A', 'teacher2', 'Physics', 'Solve the given questions', '2021-01-10'),
(3, '2021-01-01', 'English', '10', 'A', 'teacher3', 'Grammar', 'Solve the given questions', '2021-01-10');