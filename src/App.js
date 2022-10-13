import { useState } from "react";
import "./App.css";
import Home from "./Home";
import CreateWorkout from "./views/CreateWorkout";
import AllWorkouts from "./views/AllWorkouts";
import OnboardingPage from "./views/OnboardingPage";
import Register from "./views/registration/Register";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/userSlice";

function App() {
  const [startedBtn, setStartedBtn] = useState(false);
  const [isOnAllWorkouts, setIsOnAllWorkouts] = useState(true);
  const [isOnCreateWorkout, setIsOnCreateWorkout] = useState(false);
  const [toggle, setToggle] = useState(false);

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {!user ? (
        !startedBtn ? (
          <OnboardingPage startedBtn={setStartedBtn} />
        ) : (
          <Register />
        )
      ) : (
        <>
          <Home
            onallworkouts={setIsOnAllWorkouts}
            oncreateWorkout={setIsOnCreateWorkout}
            toggle={toggle}
            setToggle={setToggle}
          />
          <main id="main" className="main">
            {isOnAllWorkouts && <AllWorkouts />}
            {isOnCreateWorkout && <CreateWorkout />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
