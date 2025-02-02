import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './courses.css'

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    axios
      .get("http://localhost:8082/courses/active")
      .then((result) => {
        setCourses(result.data.data); // Adjust this if necessary
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
        <h2 className="text-center mb-4">Course List</h2>
        <div className="col-md-12 mx-auto">
        <table className="table table-striped table-responsive table-bordered text-nowrap">

          <thead className='text-center'>
            <tr>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Description</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item) => {
              return (
                <tr key={item.courseId}>
                  <td>{item.courseId}</td>
                  <td>{item.courseName}</td>
                  <td>{item.courseDesc}</td>
                  <td>{item.status}</td>
                  <td className='text-center'>
                    <button className="btn btn-danger">Delete</button>
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
  );
}

export default Course;
