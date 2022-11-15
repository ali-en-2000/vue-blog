import React from 'react'
import './Header.css'



const Header = () => {
  return (
    <div className="header container">
      
      <ul className="nav d-flex align-center justify-between">
        <li><a href="#" > خانه </a></li>
        <li><a href="#" > درباره ما </a></li>
      </ul>
      <div className="logo text-white h1"> LOGO </div>
    </div>
  )
}

export default Header