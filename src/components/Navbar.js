import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import bash from '../assets/v.png'

const Navbar = () => {
  return (
    <div class="navbar wrapper">
        <div class="logo_container">
            <Link to="/">
                <img src={bash} className='logo'/>
            </Link>
                <div class="logo-text">ardhan Reddy</div>
        </div>
            <div class="nav_items">
                <div><a href="#projects">Projects</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#contact me">Contact Me</a></div>
            </div>
    </div>
  )
}

export default Navbar;