import React, { useState, useEffect } from "react";
import "./assets/styles/Signup.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

export default function Signup() {
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [alldata, setAllData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alldata.length > 0) {
      dispatch(
        login({
          email: email,
          firstName: firstname,
          secondName: secondname,
        })
      );
    }
  }, [alldata, email, firstname, secondname, dispatch]);

  const validate = (email) => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const submitBtn = (e) => {
    e.preventDefault();
    if (
      firstname.length !== 0 &&
      secondname.length !== 0 &&
      email.length !== 0 &&
      password1.length !== 0 &&
      password2.length !== 0
    ) {
      if (validate) {
        if (password2 === password1) {
          setAllData([...alldata, email, firstname, secondname, password2]);
        } else {
          alert("Password doesnt match");
        }
      } else {
        alert("Please write a valid email");
      }
    } else {
      alert("Oops fill everything");
    }
  };

  return (
    <section id="signup" className="signup">
      <div className="container position-relative" data-aos="fade-up">
        <form className="email-form">
          <div className="row">
            <div className="col-lg-6 form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="name1"
                placeholder="Enter your firstname"
                required
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-lg-6 form-group">
              <input
                type="text"
                name="secondName"
                className="form-control"
                id="name2"
                placeholder="Your secondname"
                required
                value={secondname}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              name="password1"
              id="password1"
              placeholder="Password"
              required
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              name="password2"
              id="password2"
              placeholder="confirm password"
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button onClick={(e) => submitBtn(e)} type="submit">
              {" "}
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
