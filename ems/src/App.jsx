import React, { useContext, useEffect, useState } from "react";
import Login from "./components1/Auth/Login";
import EmployeeDashboard from "./components1/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components1/Dashboard/AdminDashboard";

import AuthProvider, { AuthContext } from "./context/AuthProvider";

const App = () => {
  /* useEffect(() =>{
   //setlocalStorage()
   getlocalStorage()
  },)*/

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);
  

  /* useEffect(() =>{
  if( authData){
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
 }, [authData]);*/
 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser){
    const userData = JSON.parse(loggedInUser)
  
  setUser(userData.role)
  setloggedInUserData(userData.data)
  }

 }, [])
console.log("logged in user data", loggedInUserData)
  const handleLogin = (email, password) => {
   //if(authData & Array.isArray(authData.employees)){
     //const employee = authData.employees.find((e) => email == e.email && password == e.password);
    //}
    
   console.log("Login attempt with:", email, password);
   console.log("userData available:", userData);
    
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } 
     else if (userData && Array.isArray(userData)) {
      console.log("Searching in userData array:", userData);
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee)
        console.log("Employee found:", employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        console.log("No matching employee found");
        alert("Invalid credentials");
      }
    } else {
      console.log("userData is not an array:", userData);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> :( user== 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> :' null')}
    </>
  );
};

export default App;
