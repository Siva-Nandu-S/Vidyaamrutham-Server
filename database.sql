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
    id int primary key auto_increment,
    name varchar(100) not null,
    class varchar(100) not null,
    section varchar(100) not null,
    roll_no int not null,
    dob date not null,
    blood_group varchar(100) not null,
    gerder varchar(100) not null,
    admission_no int not null,
    mentor_id varchar(100),
    foreign key(mentor_id) references mentor(username)
);

create table student_password(
    id int primary key,
    password varchar(100) not null,
    foreign key(id) references student(id)
);

create table parent(
    username varchar(100) primary key,
    father_name varchar(100) not null,
    mother_name varchar(100) not null,
    father_phone varchar(100) not null,
    mother_phone varchar(100) not null,
    address varchar(100) not null,
    email varchar(100) not null,
    student_id int not null,
    foreign key(student_id) references student(id)
);

create table parent_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    parent_id int not null,
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
    student_id int not null,
    date date not null,
    class varchar(100) not null, 
    section varchar(100) not null,
    status varchar(100) not null,
    primary key(student_id, date),
    foreign key(student_id) references student(id)
);

create table achievement(
    student_id int not null,
    date date not null,
    achievement varchar(100) not null,
    position int not null,
    primary key(student_id, date),
    foreign key(student_id) references student(id)
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

insert into student values (1, 'Rahul', '10', 'A', 20, '2000-01-01', 'O+ve', 'male', 1001, 'mentor1'),
(2, 'Rohit', '10', 'A', 21, '2000-01-12', 'O+ve', 'male', 1002, 'mentor2'),
(3, 'Raj', '10', 'A', 22, '2000-01-23', 'AB-', 'male', 1003, 'mentor3'),
(4, 'Riya', '10', 'A', 23, '2000-01-21', 'O+ve', 'female', 1004, 'mentor4'),
(5, 'Rani', '10', 'A', 24, '2000-01-28', 'B+', 'female', 1005, 'mentor5');

insert into student values (6, 'Danny', '10', 'B', 25, '2000-01-01', 'O+ve', 'male', 1006, 'mentor1'),
(7, 'Rahul', '10', 'B', 26, '2000-01-12', 'O-ve', 'male', 1007, 'mentor2'),
(8, 'Rohit', '10', 'B', 27, '2000-01-23', 'AB+ve', 'male', 1008, 'mentor6'),
(9, 'Raj', '10', 'B', 28, '2000-01-21', 'O+ve', 'male', 1009, 'mentor4'),
(10, 'Riya', '10', 'B', 29, '2000-01-28', 'B-ve', 'female', 1010, 'mentor7');

insert into student_password values(6, 'danny123'),
(7, 'rahul123'),
(8, 'rohit123'),
(9, 'raj123'),
(10, 'riya123');

insert into student_password values(1, 'rahul123'),
(2, 'rohit123'),
(3, 'raj123'),
(4, 'riya123'),
(5, 'rani123');

insert into parent values
('rahul123', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rahul@gmail.com', 1),
('rohit123', 'Rohit Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rohit123@emial.com', 2),
('raj123', 'Raj Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rani2003@yahoo.in', 3),
('riya123', 'Riya Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'riya@hotmails.com', 4),
('rani123', 'Raman Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'raman@google.com', 5);

insert into parent_password values
('rahul123', 'rahul123', 1),
('rohit123', 'rohit123', 2),
('raj123', 'raj123', 3),
('riya123', 'riya123', 4),
('rani123', 'rani123', 5);

insert into parent values
('danny123', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'danny@gmail', 6),
('rahul12344', 'Rahul Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rahul@yahoo', 7),
('rohit12344', 'Rohit Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'rohit123@gmail', 8),
('raj12344', 'Raj Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'raj2003@gmail', 9),
('riya12344', 'Riya Srivastava', 'Rani Srivastava', '1234567890', '1234567890', 'Delhi', 'riya2003@gmail', 10);

insert into parent_password values
('danny123', 'danny123', 6),
('rahul12344', 'rahul123', 7),
('rohit12344', 'rohit123', 8),
('raj12344', 'raj123', 9),
('riya12344', 'riya123', 10);

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
(1, '2021-01-01', '10', 'A', 'present'),
(2, '2021-01-01', '10', 'A', 'present'),
(3, '2021-01-01', '10', 'A', 'absent'),
(4, '2021-01-01', '10', 'A', 'present'),
(5, '2021-01-01', '10', 'A', 'absent'),
(1, '2021-01-02', '10', 'A', 'present'),
(2, '2021-01-02', '10', 'A', 'present'),
(3, '2021-01-02', '10', 'A', 'absent'),
(4, '2021-01-02', '10', 'A', 'present'),
(5, '2021-01-02', '10', 'A', 'absent'),
(1, '2021-01-03', '10', 'A', 'present'),
(2, '2021-01-03', '10', 'A', 'absent'),
(3, '2021-01-03', '10', 'A', 'present'),
(4, '2021-01-03', '10', 'A', 'present'),
(5, '2021-01-03', '10', 'A', 'present'),
(1, '2021-01-04', '10', 'A', 'absent'),
(2, '2021-01-04', '10', 'A', 'present'),
(3, '2021-01-04', '10', 'A', 'absent'),
(4, '2021-01-04', '10', 'A', 'present'),
(5, '2021-01-04', '10', 'A', 'present');

insert into attendance values
(6, '2021-01-01', '10', 'B', 'present'),
(7, '2021-01-01', '10', 'B', 'present'),
(8, '2021-01-01', '10', 'B', 'absent'),
(9, '2021-01-01', '10', 'B', 'present'),
(10, '2021-01-01', '10', 'B', 'absent'),
(6, '2021-01-02', '10', 'B', 'present'),
(7, '2021-01-02', '10', 'B', 'present'),
(8, '2021-01-02', '10', 'B', 'absent'),
(9, '2021-01-02', '10', 'B', 'present'),
(10, '2021-01-02', '10', 'B', 'absent'),
(6, '2021-01-03', '10', 'B', 'present'),
(7, '2021-01-03', '10', 'B', 'absent'),
(8, '2021-01-03', '10', 'B', 'present'),
(9, '2021-01-03', '10', 'B', 'present'),
(10, '2021-01-03', '10', 'B', 'present'),
(6, '2021-01-04', '10', 'B', 'absent'),
(7, '2021-01-04', '10', 'B', 'present'),
(8, '2021-01-04', '10', 'B', 'absent'),
(9, '2021-01-04', '10', 'B', 'present'),
(10, '2021-01-04', '10', 'B', 'present');

insert into achievement values
(1, '2021-01-01', '1st in Maths', 1),
(2, '2021-01-01', '2nd in Science quiz', 2),
(3, '2021-01-01', '3rd in English essay competition', 3),
(4, '2021-01-01', '1st in national debate competition', 4),
(5, '2021-01-01', '5th in Social', 5),
(1, '2021-01-02', '1st in Maths', 1),
(2, '2021-01-02', '2nd in Science', 2),
(3, '2021-01-02', '3rd in English', 3),
(4, '2021-01-02', '4th in Hindi', 4),
(6, '2021-01-02', '1st in Maths', 1),
(7, '2021-01-02', '2nd in Science', 2),
(8, '2021-01-02', '3rd in English', 3),
(9, '2021-01-02', '4th in Hindi', 4),
(10, '2021-01-02', '5th in Social', 5),
(6, '2021-01-03', '1st in Maths', 1),
(7, '2021-01-03', '2nd in Science', 2),
(8, '2021-01-03', '3rd in English', 3),
(9, '2021-01-03', '4th in Hindi', 4),
(10, '2021-01-03', '5th in Social', 5),
(6, '2021-01-04', '1st in Maths', 1),
(7, '2021-01-04', '2nd in Science', 2),
(8, '2021-01-04', '3rd in English', 3),
(9, '2021-01-04', '4th in Hindi', 4),
(10, '2021-01-04', '5th in Social', 5);