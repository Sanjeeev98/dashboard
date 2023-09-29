// import React from 'react';

// const EmployeeListComponent = ({ employees, deleteEmployee }) => {
//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <ul>
//         {employees.map((employee, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {employee.name},{' '}
//             <strong>Position:</strong> {employee.position},{' '}
//             <strong>Salary:</strong> {employee.salary}
//             <button onClick={() => deleteEmployee(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeListComponent;



import React, { useState } from 'react';
import "./Employeelist.css"

function EmployeeList({ employees, onDeleteEmployee }) {
  const [searchInput, setSearchInput] = useState('');

  // Filter employees based on the search input
  const filteredEmployees = employees.filter((employee) => {
    const searchValue = searchInput.toLowerCase();
    return (
      employee.firstname.toLowerCase().includes(searchValue) ||
      employee.lastname.toLowerCase().includes(searchValue) ||
      employee.contact.includes(searchValue) 
      // Add more fields as needed for searching
      // Example: employee.email.toLowerCase().includes(searchValue)
    );
  });
    // console.log(employees);
  return (
    <>
     <div>
        <input
          type="text"
          placeholder="Search by name or contact"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>


    <div>
  <h2>STUDENTS LIST</h2>
  <table className="EmployeeTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Father Name</th>
        <th>Mother Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>DOB</th>
        <th>Contact</th>
        <th>Father Number</th>
        <th>Marital Status</th>
        <th>Gender</th>
        <th>Qualification</th>
        <th>Hsc Marks</th>
        <th>Hsc School Name</th>
        <th>Hsc PassedYear</th>
        <th>Hsc Percentage</th>
        <th>Diploma Marks</th>
        <th>Diploma CollegeName</th>
        <th>Diploma PassedYear</th>
        <th>Diploma Specialization</th>
        <th>Diploma Percentage</th>
        <th>Diploma Class</th>
        <th>Degree</th>
        <th>CGPA</th>
        <th>PassedOut Year</th>
        <th>Photo</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {filteredEmployees.map((employee, index) => (
        <tr key={index}>
           <td>{employee.id}</td>
          <td>{employee.firstname}</td>
          <td>{employee.lastname}</td>
          <td>{employee.fathername}</td>
          <td>{employee.mothername}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.dob}</td>
          <td>{employee.contact}</td>
          <td>{employee.fathernumber}</td>
          <td>{employee.maritalstatus}</td>
          <td>{employee.gender}</td>
          <td>{employee.Qualification}</td>
          <td>{employee.hscMarks}</td>
          <td>{employee.hscSchoolName}</td>
          <td>{employee.hscPassedYear}</td>
          <td>{employee.hscPercentage}</td>
          <td>{employee.diplomaMarks}</td>
          <td>{employee.diplomaCollegeName}</td>
          <td>{employee.diplomaPassedYear}</td>
          <td>{employee.diplomaSpecialization}</td>
          <td>{employee.diplomaPercentage}</td>
          <td>{employee.diplomaClass}</td>
          <td>{employee.degree}</td>
          <td>{employee.cgpa}%</td>
          <td>{employee.passedout}</td>
          <td>{employee.photo && <img src={employee.photo} alt={` ${employee.name}`} />}</td>
          <td><button onClick={() => onDeleteEmployee(index)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
}

export default EmployeeList;

