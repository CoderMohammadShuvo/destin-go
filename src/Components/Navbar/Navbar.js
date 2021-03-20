import React, { useContext, useState } from "react";
import logo from "../../images/ce1a40f50a3b449dabf8fac4625d0aeb.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../../App";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
function NavBar() {
  const [click, setClick] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const handleClick = () => setClick(!click);
  const handleSignOut=()=>{
    firebase.auth().signOut().then(() => {
      setLoggedInUser({});
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" className="logo-img" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/destination/Bike"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>

            {!loggedInUser.email && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Log In
                </NavLink>
              </li>
            )}
            {loggedInUser.email && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleSignOut}
                >
                  Log Out
                </NavLink>
              </li>
            )}
            {loggedInUser.email && (
              <li className="nav-item">
                <h5 className="nav-links">{loggedInUser.email}</h5>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
