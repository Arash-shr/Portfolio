import React,{useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";







function Navbar() {
  const [navbarExpand,setNavbarExpand] = useState(false);
  const location = useLocation();
  
  
  useEffect(() => {
    setNavbarExpand(false);
  },[location]);

  return (
    <div className="navbar" id={navbarExpand ? "open" : "close"}>
        <div className="toggleButton">
            <button 
            onClick={
              () => {
                setNavbarExpand((prev) => !prev);
              }
            }
            >
                <ReorderIcon/>
            </button>
        </div>
         <div className="links">
 
             <Link to="/" >Home</Link>
             <Link to="/experience">Experience</Link>
         </div>
    </div>
  )
}

export default Navbar