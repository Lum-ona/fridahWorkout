import React, { useState, useEffect } from "react";
import Pagetitle from "../components/Pagetitle";
import "./assets/styles/CreateWorkout.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/userSlice";

export default function CreateWorkout({ onallworkouts }) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [feel, setFeel] = useState("");
  const [duration, setDuration] = useState("");
  const [sets, setSets] = useState("");
  const [focus, setFocus] = useState("");
  const [alldata, setAllData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alldata.length > 0) {
      dispatch(
        login({
          date: date,
          name: name,
          feel: feel,
          duration: duration,
          sets: sets,
          focus: focus,
        })
      );
      onallworkouts(true);
    }
  }, [
    alldata,
    date,
    name,
    sets,
    dispatch,
    duration,
    focus,
    onallworkouts,
    feel,
  ]);

  const submitBtn = (e) => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      sets.length !== 0 &&
      date.length !== 0 &&
      focus.length !== 0 &&
      duration.length !== 0
    ) {
      setAllData([...alldata, date, name, sets, duration, focus]);
    } else {
      alert("Oops fill everything");
    }
  };
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mt-md-0">
              <textarea
                className="form-control"
                placeholder="How did you feel"
                required
                value={feel}
                onChange={(e) => setFeel(e.target.value)}
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
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
                value={sets}
                onChange={(e) => setSets(e.target.value)}
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
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button onClick={(e) => submitBtn(e)} type="submit">
                {" "}
                Create
              </button>{" "}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
