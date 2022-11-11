import "./topbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"

export default function TopBar() {

  const { user, dispatch } = useContext(Context);
  const PF="http://localhost:5000/images/";

  const handleLogOut = () => {

    dispatch({ type: "LOGOUT" })

  }

  return (
    <div className="top">
      <div className="topLeft">
        <i
          href="https://facebook.com"
          className="topIcon fa-brands fa-facebook"
        ></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>

      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
          <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/about" className="link">CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogOut}>{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">

        {
          user ? (<Link to="/settings"><img src={PF+user.profilePic} alt="profile pic" className="topImg" /> </Link>) :

            <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
              <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
            </ul>


        }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
