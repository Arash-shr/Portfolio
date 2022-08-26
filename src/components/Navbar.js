import React, {
  useState,
  useEffect
} from "react";
import {
  Link,
  useLocation
} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import DarkModeToggle from "react-dark-mode-toggle";



function Navbar() {
  const [navbarExpand, setNavbarExpand] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    isDarkMode ? document.documentElement.style.setProperty('--background-color', "linear-gradient(to right, #141e30, #243b55)") : document.documentElement.style.setProperty('--background-color', "linear-gradient(to right,#82a4e0, #95a5bf)");

  }, [isDarkMode]);

  useEffect(() => {
    setNavbarExpand(false);
  }, [location]);

  return ( <
    div className = "navbar"
    id = {
      navbarExpand ? "open" : "close"
    } >
    <
    div className = "toggleButton" >
    <
    button onClick = {
      () => {
        setNavbarExpand((prev) => !prev);
      }
    } >
    <
    ReorderIcon / >
    <
    /button>

    <
    /div> <
    div className = "links" >

    <
    Link to = "/" > Home < /Link> <
    Link to = "/experience" > Experience < /Link> <
    DarkModeToggle onChange = {
      setIsDarkMode
    }
    checked = {
      isDarkMode
    }
    size = {
      80
    }
    />

    <
    /div>

    <
    /div>
  )
}

export default Navbar