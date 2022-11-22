import React, {useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";


const Header = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header py-2 mt-2">

      <div className="header-container container">

        <div className="header-right-side d-flex align-items-center justify-between">
          <div className="logo h1 ms-3"> LOGO</div>
          {/* <ul className="nav d-flex align-items-center justify-between"> */}
          <ul className={
            showNav ?
            "nav d-flex align-items-center justify-between active" :
            "nav d-flex align-items-center justify-between "
          }>
            <li>خانه </li>
            <li>درباره ما </li>
            <li>تماس با ما </li>
          </ul>
        </div>

        <div className="header-left-side d-flex align-items-center justify-between">

          <div id="logo-in"  >
            <span> <FiUser /> </span>
            <span> ورود </span>
          </div>

          <div className="menu d-block d-md-none " onClick={() => setShowNav(!showNav)}>
            <FiMenu className="h2 " />
          </div>

        </div>

      </div>


    </div>
  )
}

export default Header