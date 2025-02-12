import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onTextChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  


  const DoLogin = () => {
    axios.post(`http://localhost:8082/login`, credentials)
      .then((result) => {
        if (result.data) {
          sessionStorage.setItem("user", JSON.stringify(result.data)); // Store user data in localStorage
          setIsAuthenticated(true);
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch(() => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Login</h3><br />
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Email" name="email" value={credentials.email} onChange={onTextChange} className="form-control rounded-pill border-0 shadow-sm px-4" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onTextChange} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                  </div>
                  <button onClick={DoLogin} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
