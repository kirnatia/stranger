
import { useState } from "react";
import Authentication from "../components/Authentication";
export default function Login({setToken}) {
  function handleSubmit(e, username, password) {
    e.preventDefault();
  console.log('You are logged in')
  }
    return (
      <div>
        <h1>Login</h1>
       <Authentication buttonText="Login" handleSubmit={handleSubmit}/>
      </div>
    );
  }
  