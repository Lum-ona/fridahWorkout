import React, { useState } from "react";
import "./assets/styles/Header.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";

export default function Header({ setToggle }) {
  // const user = useSelector(selectUser);

  const [newNotificationCount, setNewNotificationCount] = useState(true);
  const [newMessageCount, setNewMessageCount] = useState(true);

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between ">
          <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={() => setToggle((current) => !current)}
          ></i>
        </div>

        <div className="center-header logo">
          <span className=" d-flex align-items-center ">
            <h2>Workout</h2>
          </span>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
              <span
                className="nav-link nav-icon"
                data-bs-toggle="dropdown"
                onClick={() => setNewNotificationCount(false)}
              >
                <i className="bi bi-bell"></i>
                {newNotificationCount && (
                  <span className="badge bg-primary badge-number">1</span>
                )}
              </span>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 2 new notifications
                  {/* <a href="https://www.app.echonoma.com">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a> */}
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>You can check list of all your workouts</h4>
                    <p>workouts</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                {/* <li className="dropdown-footer">
                  <a href="https://www.app.echonoma.com">
                    Show all notifications
                  </a>
                </li> */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                onClick={() => setNewMessageCount(false)}
                className="nav-link nav-icon"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                {newMessageCount && (
                  <span
                    className="badge badge-number"
                    style={{ background: "#39be81" }}
                  >
                    1
                  </span>
                )}
              </span>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 1 new messages
                  {/* <a href="https://www.app.echonoma.com">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a> */}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <span>
                    <img src="" alt="" className="rounded-circle" />
                    <div>
                      <h4>{user.firstName} </h4>
                      <p>Welcome </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                {/* <li className="dropdown-footer">
                  <a href="https://www.app.echonoma.com">Show all messages</a>
                </li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
