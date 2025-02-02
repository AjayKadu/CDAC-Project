import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from './Component/sidebar.jsx';
import Course from './Component/course.jsx';
import Faculty from './Component/Faculty.jsx';
import Student from './Component/Student.jsx';
import Dashboard from './Component/Dashboard.jsx';

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
