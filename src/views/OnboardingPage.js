import React from "react";
import "./assets/styles/Home.css";

import homeimg from "./assets/img/workout-nobg.png";

export default function OnboardingPage({ startedBtn }) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Keep track of your workouts</h1>
            <h2>Get to record your sets</h2>
            <div>
              <span
                onClick={() => startedBtn(true)}
                className="btn-get-started scrollto"
              >
                Lets get started
              </span>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={homeimg} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
