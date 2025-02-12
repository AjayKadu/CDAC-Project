<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
>>>>>>> 6c66612726a1e75faf5c21fee22834d21ead4f96
import Sidebar from './Component/sidebar.jsx';
import Course from './Component/course.jsx';
import Faculty from './Component/Faculty.jsx';
import Student from './Component/Student.jsx';
import Dashboard from './Component/Dashboard.jsx';
<<<<<<< HEAD
import AddCourse from './Component/AddCourse.jsx';
import Login from './Component/Login.jsx';
import AddFaculty from './Component/AddFaculty.jsx';
import AddStudent from './Component/AddStudent.jsx';
import StudentDetails from './Component/StudentDetails.jsx';
import FacultyDetails from './Component/FacultyDetails.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('user') ? true : false;
  });

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="d-flex" style={{ height: '100vh', width: '100%' }}>
        {isAuthenticated && (
          <div style={{ width: '15%' }}>
            <Sidebar />
          </div>
        )}
        <div className="flex-grow-1" style={{ width: isAuthenticated ? '85%' : '100%' }}>
          <Routes>
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Course />} />
                <Route path="/facultys" element={<Faculty />} />
                <Route path="/students" element={<Student />} />
                <Route path="/addcourse" element={<AddCourse />} />
                <Route path="/addfaculty" element={<AddFaculty />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/student/:id" element={<StudentDetails />} />
                <Route path="/faculty/:id" element={<FacultyDetails />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
=======

function App() {
  return (
    <Router>
      <div className="d-flex" style={{ height: '100vh' }}>

        <div className="sidebar-container">
          <Sidebar />
        </div>

    
        <div className="content-container flex-grow-1">
          <Routes>
            <Route path="/courses" element={<Course />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Student />} />
            <Route path="/" element={<Dashboard />} />
>>>>>>> 6c66612726a1e75faf5c21fee22834d21ead4f96
          </Routes>
        </div>
      </div>
    </Router>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 6c66612726a1e75faf5c21fee22834d21ead4f96
export default App;
