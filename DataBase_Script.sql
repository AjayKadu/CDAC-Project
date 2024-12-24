CREATE DATABASE InstituteManagement;
USE InstituteManagement;


DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Subjects;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Courses;
DROP TABLE IF EXISTS faculty;
DROP TABLE IF EXISTS Documents;
DROP TABLE IF EXISTS Messages;
DROP TABLE IF EXISTS Assignments;
DROP TABLE IF EXISTS ExamsDetails;
DROP TABLE IF EXISTS Notices;
DROP TABLE IF EXISTS PaymentDetails;


-- Table : Roles


CREATE TABLE Roles
(
	roleId INT PRIMARY KEY AUTO_INCREMENT,
	roleName VARCHAR(10) UNIQUE NOT NULL	
);

INSERT INTO Roles(roleName)
VALUES
('Admin'), 
('Student'), 
('Faculty');


-- Table : Subject

CREATE TABLE Subjects
(
	subjectId INT PRIMARY KEY AUTO_INCREMENT,
	subjectName VARCHAR(20) NOT NULL,
	subjectDesc	 VARCHAR(100)
);

INSERT INTO Subjects (subjectName, subjectDesc) VALUES 
('Mathematics', 'Basic Math concepts'), 
('Physics', 'Fundamentals of Physics'), 
('Chemistry', 'Introduction to Chemistry');


-- Table : Courses



CREATE TABLE Courses
(
	courseId INT PRIMARY KEY AUTO_INCREMENT,
	courseName VARCHAR(50) NOT NULL,
	courseDesc	VARCHAR(100)
);

INSERT INTO Courses (courseName, courseDesc)
VALUES 
('B.Sc Science', 'Bachelor of Science Program'), 
('B.Com', 'Bachelor of Commerce Program'), 
('B.Tech', 'Bachelor of Technology Program');


-- Table : Student



CREATE TABLE Student
(
	stdId INT PRIMARY KEY AUTO_INCREMENT,
	stdName VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE KEY NOT NULL,
	password VARCHAR(100) NOT null,
	courseId INT,
	address VARCHAR(100),
	photoImageName VARCHAR(100),
	birthDate DATE,
	gender CHAR(1),
	roleId INT,
	FOREIGN KEY (courseId) REFERENCES Courses(courseId),
	FOREIGN KEY (roleId) REFERENCES Roles(roleId)
);

INSERT INTO Student (stdName, email, password, courseId, address, photoImageName, birthDate, gender, roleId)
VALUES 
('John Doe', 'john.doe@example.com', 'pass123', 1, '123 Main St', 'john.jpg', '2000-01-01', 'M', 2),
('Jane Smith', 'jane.smith@example.com', 'pass456', 2, '456 Elm St', 'jane.jpg', '1999-05-12', 'F', 2)



-- Table : Faculty


CREATE TABLE faculty
(
    facultyId INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    courseId INT,
    address VARCHAR(100),
    photoImageName VARCHAR(100),
    birthDate DATE,
    gender CHAR(1),
    roleId INT,
    FOREIGN KEY (courseId) REFERENCES Courses(courseId),
    FOREIGN KEY (roleId) REFERENCES Roles(roleId)
);

INSERT INTO Faculty (fname, email, password, courseId, address, photoImageName, birthDate, gender, roleId) VALUES 
('Dr. Alan Brown', 'alan.brown@example.com', 'faculty123', 1, '789 Pine St', 'alan.jpg', '1980-09-15', 'M', 3),
('Prof. Mary Johnson', 'mary.johnson@example.com', 'faculty456', 3, '321 Oak St', 'mary.jpg', '1975-11-23', 'F', 3);


-- Table : Documents



CREATE TABLE Documents
(
    docId INT PRIMARY KEY AUTO_INCREMENT,
    docName VARCHAR(100) NOT NULL,
    docType VARCHAR(100),
    stdId INT,
    FOREIGN KEY (stdId) REFERENCES Student(stdId)
);

INSERT INTO Documents (docName, docType, stdId) VALUES 
('Math Notes', 'PDF', 1), 
('Physics Lab Report', 'Word', 2);


-- Table : Messages



CREATE TABLE Messages
(
    msgId INT PRIMARY KEY AUTO_INCREMENT,
    msgTxt VARCHAR(100) NOT NULL,
    stdId INT,
    facultyId INT,
    roleId INT,
    FOREIGN KEY (stdId) REFERENCES Student(stdId),
    FOREIGN KEY (facultyId) REFERENCES Faculty(facultyId),
    FOREIGN KEY (roleId) REFERENCES Roles(roleId)
);

INSERT INTO Messages (msgTxt, stdId, facultyId, roleId) VALUES 
('Assignment submission delayed', 1, 1, 2),
('Exam schedule updated', 2, 2, 3);


-- Table : Assignments



CREATE TABLE Assignments
(
    assignId INT PRIMARY KEY AUTO_INCREMENT,
    assignName VARCHAR(100),
    assignDesc VARCHAR(100),
    publishDate DATETIME,
    dueDate DATE,
    courseId INT,
    subjectId INT,
    studentId INT,
    FOREIGN KEY (courseId) REFERENCES Courses(courseId),
    FOREIGN KEY (subjectId) REFERENCES Subjects(subjectId),
    FOREIGN KEY (studentId) REFERENCES Student(stdId)
);

INSERT INTO Assignments (assignName, assignDesc, publishDate, dueDate, courseId, subjectId, studentId) VALUES 
('Math Homework 1', 'Complete problems 1-10', '2024-06-10 10:00:00', '2024-06-20', 1, 1, 1),
('Physics Project', 'Group project on motion', '2024-06-12 12:00:00', '2024-06-25', 2, 2, 2);


-- Table : ExamsDetails



CREATE TABLE ExamsDetails (
    examId INT PRIMARY KEY AUTO_INCREMENT,
    examName VARCHAR(100) NOT NULL,
    courseId INT,
    FOREIGN KEY (courseId) REFERENCES Courses(courseId)
);

INSERT INTO ExamsDetails (examName, courseId) VALUES 
('Mid-Term Exam', 1), 
('Final Exam', 2);


-- Table : Notices



CREATE TABLE Notices (
    noticeId INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT,
    noticeText VARCHAR(100),
    FOREIGN KEY (courseId) REFERENCES Courses(courseId)
);

INSERT INTO Notices (courseId, noticeText) VALUES 
(1, 'Holiday on 15th August'), 
(2, 'Fee payment deadline extended');


-- Table : PaymentDetails



CREATE TABLE PaymentDetails (
    paymentId INT PRIMARY KEY AUTO_INCREMENT,
    initialDate DATETIME,
    trnxCompleteDate DATETIME,
    trnxNo VARCHAR(100),
    amount DOUBLE,
    status VARCHAR(100),
    stdId INT,
    FOREIGN KEY (stdId) REFERENCES Student(stdId)
);

INSERT INTO PaymentDetails (initialDate, trnxCompleteDate, trnxNo, amount, status, stdId) VALUES 
('2024-05-01 10:00:00', '2024-05-02 12:00:00', 'TRX12345', 5000.00, 'Completed', 1),
('2024-05-03 11:00:00', '2024-05-04 15:00:00', 'TRX67890', 5500.00, 'Pending', 2);


--============================================================
-- Script : TRUNCATE
--============================================================

TRUNCATE TABLE Roles;
TRUNCATE TABLE Subjects;
TRUNCATE TABLE Courses;
TRUNCATE TABLE Student;
TRUNCATE TABLE faculty;
TRUNCATE TABLE Documents;
TRUNCATE TABLE Messages;
TRUNCATE TABLE Assignments;
TRUNCATE TABLE ExamsDetails;
TRUNCATE TABLE Notices;
TRUNCATE TABLE PaymentDetails;

--============================================================




