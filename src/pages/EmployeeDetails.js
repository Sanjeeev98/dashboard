// import React, { useState } from 'react';
// import "./Employeedetails.css"

// function EmployeeDetails() {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState({
//     name: '',
//     position: '',
//     salary: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewEmployee((prevEmployee) => ({
//       ...prevEmployee,
//       [name]: value,
//     }));
//   };

//   const addEmployee = () => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//     setNewEmployee({
//       name: '',
//       position: '',
//       salary: '',
//     });
//   };

//   const deleteEmployee = (index) => {
//     const updatedEmployees = employees.filter((_, i) => i !== index);
//     setEmployees(updatedEmployees);
//   };

//   return (
//     <div className="container">
//       <h1>Employee Details</h1>
//       <div className="form-container">
//         <div className="input-group">
//           <label className='list1' htmlFor="name">Name:</label>
//           <span>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={newEmployee.name}
//             onChange={handleInputChange}
//           />
//           </span>
//         </div>
//         <div className="input-group">
//           <label className='list2' htmlFor="position">Position:</label>
//           <span>
//           <input
//             type="text"
//             id="position"
//             name="position"
//             value={newEmployee.position}
//             onChange={handleInputChange}
//           />
//           </span>
//         </div>
//         <div className="input-group">
//           <label className='list3' htmlFor="salary">Salary:</label>
//           <span>
//           <input
//             type="text"
//             id="salary"
//             name="salary"
//             value={newEmployee.salary}
//             onChange={handleInputChange}
//           />
//           </span>
//         </div>
//         <button onClick={addEmployee}>Add Employee</button>
//       </div>
//       {/* <div className="employee-list-container">
//         <h2>Employee List</h2>
//         <ul>
//           {employees.map((employee, index) => (
//             <li key={index}>
//               <strong>Name:</strong> {employee.name},{' '}
//               <strong >Position:</strong> {employee.position},{' '}
//               <strong>Salary:</strong> {employee.salary}
//               <button className='delete-btn' onClick={() => deleteEmployee(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// }

// export default EmployeeDetails;


















import React, { useState } from 'react';
import "./Employeedetails.css"
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"></link>

function AddEmployee({ onAddEmployee }) {
  const [firstname, setName] = useState('');
  const [lastname, setPosition] = useState('');
  const [fathername,setFathername] = useState("");
  const [mothername, setMothername] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [dob,setDob] = useState('');
  const [contact,setContact] = useState('');
  const [fathernumber,setFathernumber] = useState('');
  const [maritalstatus,setMaritalstatus] = useState('');
  const [gender,setGender] = useState('');
  const [degree,setDegree] = useState('');
  const [cgpa,setCgpa] = useState('');
  const [passedout,setPassedout] = useState('');
  const [photo,setPhoto] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstname,
      lastname,
      fathername,
      mothername,
      email,
      address,
      dob,
      contact,
      fathernumber,
      maritalstatus,
      gender,
      degree,
      cgpa,
      passedout,
      photo,
    };
    onAddEmployee(newEmployee);
    setName('');
    setPosition('');
    setFathername("");
    setMothername('');
   setEmail('');
   setAddress('');
   setDob('');
   setContact('');
   setFathernumber('');
   setMaritalstatus('');
   setGender('');
   setDegree('');
   setCgpa('');
   setPassedout('');
   setPhoto('');
  };
 

  return (
    <div className='Container'>
      <h2>STUDENT ENTRY FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fathername">Father Name:</label>
          <input
            type="text"
            id="fathername"
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mothername">Mother Name:</label>
          <input
            type="text"
            id="mothername"
            value={mothername}
            onChange={(e) => setMothername(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
        <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)} 
        />
      </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date" 
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fathernumber">Father Number:</label>
          <input
            type="tel"
            id="fathernumber"
            value={fathernumber}
            onChange={(e) => setFathernumber(e.target.value)}
          />
        </div>
        <div>
            <label>Marital Status:</label>
            <label htmlFor="maritalYes">
              <input
                type="checkbox"
                id="maritalYes"
                value="yes"
                checked={maritalstatus === "yes"}
                onChange={(e) => setMaritalstatus(e.target.checked ? "yes" : "no")} 
              />
              Yes
            </label>
            <label htmlFor="maritalNo">
              <input
                type="checkbox"
                id="maritalNo"
                value="no"
                checked={maritalstatus === "no"}
                onChange={(e) => setMaritalstatus(e.target.checked ? "no" : "yes")}
              />
              No
            </label>
          </div>

        <div>
            <label>Gender:</label>
            <label htmlFor="male">
              <input
                type="checkbox"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.checked ? "male" : "")} 
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="checkbox"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.checked ? "female" : "")} 
              />
              Female
            </label>
          </div>
            <div>
            <label htmlFor="cgpa">CGPA (Percentage):</label>
            <input
              type="number"
              id="cgpa"
              min="0"
              max="100"
              step="0.01" 
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)} 
            />
            %
          </div>
        <div>
          <label htmlFor="passedout">PassedOut Year:</label>
          <input
            type="number"
            id="passedout"
            value={passedout}
            onChange={(e) => setPassedout(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          accept="image/*" 
          id="photo"
          onChange={handlePhotoChange} 
        />
      </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default AddEmployee;
