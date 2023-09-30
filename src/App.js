// import React , {useState , useEffect} from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
// import "./pages/Employeedetails.css"
// import AddEmployee from './pages/EmployeeDetails';
// import EmployeeList from './pages/Employeelist';
// import Employee from './pages/Employee';


// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [employeeCount, setEmployeeCount] = useState(0);

//   useEffect(() => {
//     const savedCount = localStorage.getItem('employeeCount');
//     if (savedCount) {
//       setEmployeeCount(parseInt(savedCount, 10)); // Parse the count as an integer
//     }
//   }, []); // The empty dependency array means this effect runs once on mount



//   const handleAddEmployee = (newEmployee) => {
//     // Increment the count and save it to local storage
//     const newCount = employeeCount + 1;
//     setEmployeeCount(newCount);
//     localStorage.setItem('employeeCount', newCount.toString()); // Save the new count as a string

//     // Generate the new employee ID
//     const id = `STU${newCount.toString().padStart(3, '0')}`;
//     newEmployee.id = id; // Assign the ID to the new employee

//     // Add the new employee to the list
//     setEmployees([...employees, newEmployee]);
//   };

//   const handleDeleteEmployee = (index) => {
//     const updatedEmployees = employees.filter((_, i) => i !== index);
//     setEmployees(updatedEmployees);
//   };

//   const onUpdateEmployee = (editedEmployee, index) => {
//     const updatedEmployees = [...employees];
//     updatedEmployees[index] = editedEmployee;
//     setEmployees(updatedEmployees);
//   };


//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Dashboard  employees={employees}  />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//                <Route exact path="/EmployeeDetails" element={<AddEmployee onAddEmployee={handleAddEmployee}/>} />
             
//           <Route path="/EmployeeList" element={<EmployeeList employees={employees}   onDeleteEmployee={handleDeleteEmployee} onUpdateEmployee={onUpdateEmployee}/>} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/Employee" element={<Employee />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;







import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import "./pages/Employeedetails.css"
import AddEmployee from './pages/EmployeeDetails';
import EmployeeList from './pages/Employeelist';
import Employee from './pages/Employee';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [lastEmployeeId, setLastEmployeeId] = useState(0);





  const handleAddEmployee = (newEmployee) => {
    const newEmployeeId = lastEmployeeId + 1;
    setEmployees([...employees, { ...newEmployee, id: `STU${newEmployeeId.toString().padStart(3, '0')}`}]);
    setLastEmployeeId(newEmployeeId);
  
    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem('employees', JSON.stringify([...employees, newEmployee]));
    localStorage.setItem('lastEmployeeId', newEmployeeId.toString());
  };




  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
  
    // Find the highest ID among remaining employees
    let highestId = 0;
    updatedEmployees.forEach((employee) => {
      const employeeIdNumber = parseInt(employee.id.substr(3));
      if (employeeIdNumber > highestId) {
        highestId = employeeIdNumber;
      }
    });
  
    // Set the lastEmployeeId to the highest ID
    setLastEmployeeId(highestId);
  
    // Update the employees list
    setEmployees(updatedEmployees);
  
    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    localStorage.setItem('lastEmployeeId', highestId.toString());
  };




  const onUpdateEmployee = (editedEmployee, index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = editedEmployee;
    setEmployees(updatedEmployees);
  };





  useEffect(() => {
    // Load employees from local storage on component mount
    const savedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }

    // Load the last assigned employee ID from local storage on component mount
    const savedLastEmployeeId = localStorage.getItem('lastEmployeeId');
    if (savedLastEmployeeId) {
      setLastEmployeeId(parseInt(savedLastEmployeeId));
    }
    else {
      // If it's not found in local storage, set it to 0
      setLastEmployeeId(0);
    }
  }, []);



  
  useEffect(() => {
    // Save employees to local storage whenever it changes
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard employees={employees} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/EmployeeDetails" element={<AddEmployee onAddEmployee={handleAddEmployee} />} />
          <Route path="/EmployeeList" element={<EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} onUpdateEmployee={onUpdateEmployee} />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
