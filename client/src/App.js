// import logo from './logo.svg';
 
import {BrowserRouter, Route, Switch} from "react-router-dom"
 
import './App.css';
import Login from "./components/Login";

import Mypage from "./components/Mypage";
import Signup from "./components/Signup";
 
function App() {
  return (
   <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/mypage">
        <Mypage />
      </Route>
      </Switch>
    </BrowserRouter>
    </>
    
  );
}
 
export default App;