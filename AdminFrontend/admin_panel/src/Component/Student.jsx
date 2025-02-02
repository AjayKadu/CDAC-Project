import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Student() {

  const[students, setStudents] = useState([]);

  useEffect(()=>{
    getAllStudentsActive();
  },[]);

  const getAllStudentsActive = () =>{
       axios.get("http://localhost:8082/students").then((result)=>{
            setStudents(result.data);
       })
  }


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
        <h2 className="text-center mb-4">Students List</h2>
        <div className="col-md-12 mx-auto">
        <table className="table table-striped table-responsive table-bordered text-nowrap text-center">

          <thead>
            <tr>

              <th scope="col">Student ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course</th>
              <th scope="col">Address</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => {
              return (
                <tr key={item.stdId}>
                  <td>{item.stdId}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.course.courseName}</td>
                  <td>{item.address}</td>
                  <td>{formatDate(item.birthDate)}</td>
                  <td>{formatGender(item.gender)}</td>
                  <td>Image of Student</td>
                  <td>
                    <button className="btn btn2 btn-danger">Delete</button>
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

export default Student