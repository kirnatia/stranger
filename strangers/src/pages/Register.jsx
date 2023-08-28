import { useState } from "react";
import Authentication from "../components/Authentication";
export default function Register({ setToken }) {

    return (
      <div>
        <h1>Register</h1>
        <Authentication buttonText="Register"/>
      </div>
    );
  }
  