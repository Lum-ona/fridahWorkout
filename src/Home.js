import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home({
  onallworkouts,
  oncreateWorkout,
  toggle,
  setToggle,
}) {
  return (
    <div className="home">
      <Header setToggle={setToggle} />
      <Sidebar
        allworkouts={onallworkouts}
        createWorkout={oncreateWorkout}
        toggle={toggle}
      />
      {/* <h1>home</h1> */}
    </div>
  );
}
