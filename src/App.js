import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Destination from "./Components/Destination/Destination";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
  return (
    <userContext.Provider value={{loggedInUser, setLoggedInUser,isUserLoggedIn,setIsUserLoggedIn}}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:vehicleName">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
