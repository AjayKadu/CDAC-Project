import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  const navigate = useNavigate(); // Hook for navigation

  const Logout = () => {
    sessionStorage.removeItem("user"); // Remove user session
    navigate("/"); // Redirect to login page
    window.location.reload(); // Reload to reset state
  };

  return (
    <div className="sidebar bg-dark text-white d-flex flex-column" style={{ padding: '15px', height: '100vh' }}>
      <div className='d-flex align-items-center py-3'>
        <i className="fas fa-bars fa-2x mt-1"></i> 
        <h4 className='px-2 pt-1'>Menu</h4>
      </div>  

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/courses">  
            <i className="fas fa-book"></i> Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/facultys">  
            <i className="fas fa-user-tie"></i> Facultys
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 py-2 text-white" to="/students">
            <i className="fas fa-users"></i> Students
          </Link>
        </li>
        <li className="nav-item pt-2">
          <button className="btn btn-danger" onClick={Logout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
