import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./assets/styles/Register.css";

export default function Register() {
  const [isAccount, setIsAccount] = useState(false);

  return (
    <div className="register">
      <div className="row w-100 h-100">
        <div className="col-lg-5 text-center">
          <h2 className="mb-4">Welcome back!!</h2>
          <Login />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 text-center">
          <h2 className="mb-4">Join us!!</h2>
          <Signup />
        </div>
      </div>
    </div>
  );
}
