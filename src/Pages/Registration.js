import React, { useEffect, useState } from 'react';
import '../App.css';
import Axios from 'axios';

export default function Registration() {


	const [userNameReg, setUserNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
      Axios.post('http://localhost:3001/register', {
        username : userNameReg,
        password : passwordReg,

       }).then((response)=>{
        console.log(response);
       })
    };

      const login = () => {
      Axios.post('http://localhost:3001/login', {
        username : username,
         password : password,
         
       }).then((response)=>{

        console.log(response.data.message);

        if(response.data.message){

          setLoginStatus(response.data.message)

        } else{

          setLoginStatus(response.data[0].username);

        }
       });
    };

   useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if(response.data.loggedIn == true) {
          setLoginStatus(response.data.user[0].username);
        }
      })
   }, []);


	return(
		<div className="App">
	      <div className="registartion">
	        <h1>Registartion</h1>
	        <label>
	          Username
	        </label>
	        <input type="text"
	            onChange={(e)=>{
	                setUserNameReg(e.target.value);
	            }}
	         />
	        <label>Password</label>
	        <input type="password"
	            onChange={(e)=>{
	                setPasswordReg(e.target.value);
	            }}
	         />
	        <button onClick={register} > Register </button>
	      </div>

	      <div className="login">
	        <h1>Login</h1>
	        <input 
	        type="text" 
	        placeholder="Username"
	        onChange={(e)=>{
	          setUserName(e.target.value);
	        }}
	         />
	        
	        <input 
	        type="password" 
	        placeholder="Password"
	         onChange={(e)=>{
	          setPassword(e.target.value);
	        }}
	         />
	        <button onClick={login}>Login</button>

	        <h1>{loginStatus}</h1>
	      </div>
    	</div>
		)
}