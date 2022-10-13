import React from "react";
import Pagetitle from "../components/Pagetitle";
import "./assets/styles/AllWorkouts.css";

export default function AllWorkouts() {
  return (
    <>
      <Pagetitle
        header="All Workouts done"
        breadcrumb="current Workouts done"
        activeBreadcrumb="status"
      />
      <div className="card All Workouts done overflow-auto">
        <div className="card-body">
          <h3 className="card-title">
            All Workouts done <span>| Today</span>
          </h3>

          <table className="table table-borderless datatable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Workout type/Name</th>
                <th scope="col">How did you feel</th>
                <th scope="col">Duration</th>
                <th scope="col">sets</th>
                <th scope="col">Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>#1</span>
                </th>
                <td>Data Collection supervisor</td>
                <td>Tech</td>
                <td>
                  <span className="text-primary">Green</span>
                </td>

                <td>
                  <span>30th October</span>
                </td>
                <td>Not yet</td>
                <td>
                  {" "}
                  <span className="badge bg-warning">Null</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>#s</span>
                </th>
                <td>Data Collector</td>
                <td>Tech</td>
                <td>
                  <span className="text-primary">Green</span>
                </td>

                <td>
                  <span>30th October</span>
                </td>
                <td>Not yet</td>
                <td>
                  {" "}
                  <span className="badge bg-warning">Null</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
