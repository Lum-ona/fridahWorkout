import React, { useState } from "react";
import "./assets/styles/Sidebar.css";
// import { logout } from "../redux/features/userSlice";
// import { useDispatch } from "react-redux";

export default function Sidebar({ allworkouts, createWorkout, toggle }) {
  // const dispatch = useDispatch();

  const [homebgActive, sethomeBgActive] = useState(true);
  const [vacancybgActive, setvacancyBgActive] = useState(false);
  const [profilebgActive, setprofileBgActive] = useState(false);
  const [activitiesbgActive, setactivitiesBgActive] = useState(false);
  const [inboxbgActive, setinboxBgActive] = useState(false);

  return (
    <>
      <aside
        id="sidebar"
        className={toggle ? "sidebar" : "sidebar sidebar-slide"}
      >
        <ul className="sidebar-nav" id="sidebar-nav">
          <li
            className="nav-item"
            onClick={() => {
              allworkouts(true);
              createWorkout(false);
            }}
          >
            <span
              className="nav-link "
              style={{
                background: homebgActive ? "#f6f9ff" : "white",
                color: homebgActive && "#39be81",
              }}
            >
              {" "}
              <i className="bi bi-house"></i>
              <span>Home</span>
            </span>
          </li>

          <li className="nav-heading">Pages</li>

          <li
            className="nav-item"
            onClick={() => {
              allworkouts(false);
              createWorkout(true);
            }}
          >
            <span
              className="nav-link "
              style={{
                background: activitiesbgActive ? "#f6f9ff" : "white",
                color: activitiesbgActive && "#39be81",
              }}
            >
              {" "}
              <i className="bi bi-bar-chart"></i>
              <span>Creat Workout</span>
            </span>
          </li>

          <li className="nav-item">
            <span
              className="nav-link "
              // onClick={() => dispatch(logout())}
            >
              {" "}
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Signout</span>
            </span>
          </li>
        </ul>
      </aside>
    </>
  );
}
