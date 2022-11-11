import "./sidebar.css"
import React from 'react'
import { useState, useEffect } from "react";
import { Link } from'react-router-dom'
import axios from "axios";


export default function Sidebar() {


  const [cats, setCats] = useState([]);

  useEffect(() => {

    const getCats = async () => {

      const response = await axios.get("/categories");
      setCats(response.data);

    }

    getCats();

  }, [])



  return (
    <div className="sidebar">

      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://imagescdn.peterengland.com/img/app/product/3/365061-1844608-large.jpg" alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>

      </div>

      <div className="sidebarItem">

        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">

          {
            cats.map((c) =>

            <Link to={`/?cat=${c.name}`} className="link">

              <li className="sidebarListItem">{c.name}</li>   </Link>

            ) }

        </ul>

      </div>

      <div className="sidebarItem">

        <span className="sidebarTitle">FOLLOW US</span>

        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>

        </div>


      </div>



    </div>
  )
}
