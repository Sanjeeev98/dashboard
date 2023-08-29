import React from "react";
import "./dashboard.css"
import logo from "./logo1.png"

const Dashboard = ({employees}) => {
    return (
        <>
        <div className="dashboard">
            <h1>DASHBOARD</h1>

            <div className="EmployeeCount">
            <p>{employees.length}</p> 
              <h4>Students</h4>  
              <img className="pic" src={logo}/>       
            </div>  
        </div>
        </>
    );
};

export default Dashboard;