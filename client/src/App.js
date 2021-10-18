// import logo from './logo.svg';
 
import {BrowserRouter, Route, Switch} from "react-router-dom"
 
import './App.css';
import ExerciseLibrary from "./components/ExerciseLibrary";
import Login from "./components/Login";
import MyClasses from "./components/MyClasses";

import Mypage from "./components/Mypage";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Students from "./components/Students";
import WorkoutLibrary from "./components/WorkoutLibrary";
 
function App() {
  return (
   <>
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/mypage">
            <Mypage />
          </Route>

          <Route exact path="/library">
            <ExerciseLibrary/>
          </Route>

          <Route exact path="/myclasses">
            <MyClasses/>
          </Route>

          <Route exact path="/workouts" >
            <WorkoutLibrary/>
          </Route>

          <Route  exact path="/students">
            <Students/>
          </Route>
        
        </Switch>

      </BrowserRouter>
    </>
    
  );
}
 
export default App;