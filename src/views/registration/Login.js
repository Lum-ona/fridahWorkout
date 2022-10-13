import React from "react";
import "./assets/styles/Login.css";

export default function Login() {
  return (
    <section id="login" className="login">
      <div className="container position-relative" data-aos="fade-up">
        <form className="email-form w-100">
          <div className=" form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control text-center"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control text-center"
              name="password1"
              id="password1"
              placeholder="Password"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}
