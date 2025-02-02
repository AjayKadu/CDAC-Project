import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Faculty() {

  const [facultys, setFacultys] = useState([]);


  useEffect(()=>{
    getAllFaculty();
  },[]);

  const getAllFaculty = () => {
      debugger;
    axios.get("http://localhost:8082/faculty").then((result)=>{
          setFacultys(result.data);
    })}

  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };


  const formatGender = (gender) => {
    return gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Other';
  };

   
  return (
     <>

<div className="container mt-5">
        <div className="row">
        <h2 className="text-center mb-4">Faculty List</h2>
        <div className="col-md-12 mx-auto">
        <table className="table table-striped table-responsive table-bordered text-nowrap text-center">

          <thead>
            <tr>

              <th scope="col">Faculty ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Courses</th>
              <th scope="col">Address</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {facultys.map((item) => {
              return (
                <tr key={item.facultyId}>
                  <td>{item.facultyId}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.courses.courseName}</td>
                  <td>{item.address}</td>
                  <td>{formatDate(item.birthDate)}</td>
                  <td>{formatGender(item.gender)}</td>
                  <td>Image of Faculty</td>
                  <td>
                    <button className="btn btn2 btn-danger text-center">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        </div>
      </div>

</>
  )
}

export default Faculty