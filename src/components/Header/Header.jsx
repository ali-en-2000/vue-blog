import React from 'react'
import './Header.css'



const Header = () => {
  return (
    <div className="header py-2 ">

      <div className="header-container container">
        <ul className="nav d-flex align-center justify-between">
          <li><a href="#" > خانه </a></li>
          <li><a href="#" > درباره ما </a></li>
          <li><a href="#" > تماس با ما </a></li>
        </ul>
        <div className="logo h1 "> LOGO </div>
      </div>


    </div>
  )
}

export default Header