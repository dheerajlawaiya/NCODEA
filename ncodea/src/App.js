
import React, {useState} from 'react';
import './App.css';
import './index.css'

import LoginForm from './Components/LoginForm';



function App() {
   const adminUser = {
    // email : "admin@admin.com",
    password : "admin",
    name : "admin"
   }
   const [user , setUser] = useState({name:""});
   const [ error , setError] = useState("");
    const Login = details=>{
      console.log(details);
      if (details.name === adminUser.name && details.password === adminUser.password  ){
        console.log("Logged in");
        setUser({
          name: details.userName,
          // email : details.email
        });
      } else {
        console.log("details do not match !");
        setError("details do not match !");
        
      }
    }
    const Logout = ()=>{
     setUser({name:""})
    }
   return (
    <div className="App">
      {(user.name !=="") ? (
        <div className="welcome">
          <h1>Welcome  <span>{adminUser.name}</span></h1>
          <button onClick={Logout} >Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;