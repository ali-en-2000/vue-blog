import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";




const Header = () => {
  return (
    <div className="header py-2 ">

      <div className="header-container container">

        <div className="header-right-side">
          <ul className="nav d-flex align-items-center justify-between">
            <li className="logo h1"> LOGO</li>
            <li>خانه </li>
            <li>درباره ما </li>
            <li>تماس با ما </li>
          </ul>
        </div>

        <div className="header-left-side">

          {/* <div className="input-group mb-3 search">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            <input type="text" className="form-control" placeholder=" جستجو... " />
          </div> */}

          <button className="header-btn">
            <span> ورود </span>
            <span> <FiUser /> </span>
          </button>
          <button className="header-btn">
            <FiMenu />
          </button>

        </div>

      </div>


    </div>
  )
}

export default Header