import React from 'react'
import {  Link , useLocation } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import '../Navbar/navbar.css';


const Navbar = () => {
 
  const routeLocation = useLocation();
  return (
    <div >
      <nav className="navbar  navbar-fixed-top navbar-expand-lg bg-body-tertiary py-lg-3" >
  <div className="container-fluid">
    <Link className="navbar-brand ps-lg-5" to="/" ><img src={Logo} alt="img" height="35" /> </Link>
    <button className="navbar-toggler me-sm-3.5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto" >
        <li className="nav-item mx-3">
          <Link className={`nav-link ${routeLocation.pathname== "/" ? "fw-bold" : "fw-light"}`} aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item mx-3 ">
          <Link className={`nav-link ${routeLocation.pathname== "/shop" ? "fw-bold" : "fw-light"}`} to="/shop">Products</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className={`nav-link ${routeLocation.pathname== "/about" ? "fw-bold" : "fw-light"}`} to="/about">About</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className={`nav-link ${routeLocation.pathname== "/contact" ? "fw-bold" : "fw-light"}`} to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar