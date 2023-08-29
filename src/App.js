import React , {useState} from 'react';
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


const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };


  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard  employees={employees}  />} />
          <Route path="/dashboard" element={<Dashboard />} />
               <Route exact path="/EmployeeDetails" element={<AddEmployee onAddEmployee={handleAddEmployee}/>} />
             
          <Route path="/EmployeeList" element={<EmployeeList employees={employees}   onDeleteEmployee={handleDeleteEmployee}/>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;





