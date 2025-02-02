import React from 'react';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column" style={{ height: '100%', padding: '20px' }}>
      <h4 className="text-center py-3">Menu</h4>
      
      <ul className="nav flex-column">
      <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/">
          <i class="fas fa-tachometer-alt"></i> Dashboard

          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/courses">  
            <i className="fas fa-book"></i> Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/faculty">  
            <i className="fas fa-user-tie"></i> Faculty
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/students">
            <i className="fas fa-users"></i> Students
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
