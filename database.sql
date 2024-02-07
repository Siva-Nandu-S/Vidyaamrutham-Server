use vidyaamrutham;

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
    subject varchar(100) not null
);

create table teacher_password(
    username varchar(100) primary key,
    password varchar(100) not null,
    teacher_id int not null,
    foreign key(username) references teacher(username)
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
    admission_no int not null
);

create table student_password(
    id int primary key,
    password varchar(100) not null,
    foreign key(id) references student(id)
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

insert into student values(1, 'Rahul', '10', 'A', 20, '2000-01-01', 'O+ve', 'male', 1001),
(2, 'Rohit', '10', 'A', 21, '2000-01-12', 'O+ve', 'male', 1002),
(3, 'Raj', '10', 'A', 22, '2000-01-23', 'O+ve','male', 1003),
(4, 'Riya', '10', 'A', 23, '2000-01-21', 'O+ve', 'female', 1004),
(5, 'Rani', '10', 'A', 24, '2000-01-28', 'O+ve','female', 1005);

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

insert into teacher values
('teacher1', 'Rahul Srivastava', '1234567890', 'Maths'),
('teacher2', 'Rohit Srivastava', '1234567890', 'Science'),
('teacher3', 'Raj Srivastava', '1234567890', 'English'),
('teacher4', 'Riya Srivastava', '1234567890', 'Hindi'),
('teacher5', 'Rani Srivastava', '1234567890', 'Social Science');

insert into teacher_password values
('teacher1', 'teacher1', 1),
('teacher2', 'teacher2', 2),
('teacher3', 'teacher3', 3),
('teacher4', 'teacher4', 4),
('teacher5', 'teacher5', 5);

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
