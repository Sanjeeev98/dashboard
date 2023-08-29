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




import React from 'react';
import "./Employeelist.css"

function EmployeeList({ employees, onDeleteEmployee }) {
    console.log(employees);
  return (
    <>
    {/* <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>First Name:</strong> {employee.firstname} <br/>
             <strong>Last Name:</strong> {employee.lastname}  <br/>
             <strong>Father Name:</strong> {employee.fathername}  <br/>
             <strong>Mother Name:</strong> {employee.mothername}  <br/>
             <strong>Email:</strong> {employee.email}  <br/>
             <strong>Address:</strong> {employee.address}  <br/>
             <strong>DOB:</strong> {employee.dob}  <br/>
             <strong>Contact:</strong> {employee.contact}  <br/>
             <strong>Father Number:</strong> {employee.fathernumber}  <br/>
             <strong>Marital Status:</strong> {employee.maritalstatus}  <br/>
             <strong>Gender:</strong> {employee.gender}  <br/>
             <strong>Degree:</strong> {employee.degree}  <br/>
             <strong>CGPA:</strong> {employee.cgpa}  <br/>
             <strong>PassedOut Year:</strong> {employee.passedout}  <br/>
             {employee.photo && <img src={employee.photo} alt={`Photo of ${employee.name}`} />}
          

            <button onClick={() => onDeleteEmployee(index)}>Delete </button>
          </li>

        ))}
      </ul>
    </div> */}
    




    <div>
  <h2>STUDENTS LIST</h2>
  <table className="EmployeeTable">
    <thead>
      <tr>
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
        <th>Degree</th>
        <th>CGPA</th>
        <th>PassedOut Year</th>
        <th>Photo</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee, index) => (
        <tr key={index}>
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

