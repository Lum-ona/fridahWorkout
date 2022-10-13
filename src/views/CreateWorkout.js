import React from "react";
import Pagetitle from "../components/Pagetitle";
import "./assets/styles/CreateWorkout.css";

export default function CreateWorkout() {
  return (
    <>
      <Pagetitle header="Create workout" />
      <section id="createWorkout" className="createWorkout">
        <div className="container position-relative" data-aos="fade-up">
          <form className="email-form">
            <div className="form-group mt-3 mt-md-0">
              <input
                type="date"
                className="form-control"
                name="date"
                id="date"
                placeholder="Date"
                required
              />
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Which type of workout did you do"
                required
              />
            </div>
            <div className="form-group mt-3 mt-md-0">
              <textarea
                className="form-control"
                placeholder="How did you feel"
                required
              ></textarea>
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name="duration"
                id="duration"
                placeholder="Duration (min)"
                required
              />
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name="set"
                id="set"
                placeholder="How many sets did you do"
                required
              />
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="focus"
                id="focux"
                placeholder="Where was your focus e.g arm..?"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
