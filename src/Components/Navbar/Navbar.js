import React, { useState } from "react";
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";
const Navbar = () => {
  const[inputval,setinputval]=useState("");
  const onInputChange=(event)=>{
        setinputval(event.target.value)
        console.log(event.target.value)
  }
  return (
    <div className={classes.main}>
      <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light fixed-top`}>
       <Link to="/" style={{color:"black"}}> <div className={classes.brand}>
            <h1 className={classes.logoname}>hr</h1>
            <h1 className={classes.brandname}>techbase</h1>
            
        </div></Link>
        <button
          className={`${classes.hamburger} navbar-toggler`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ${classes.heightop}`}>
            {/* 
            */}
            <li className="nav-item active">
            <form className="form-inline my-2 my-lg-0">
                <div className={classes.relative}>
           <Link to="/seacrh"> <input
              className={`${classes.search} form-control mr-sm-2`}
              type="search"
              placeholder="Search.."
              aria-label="Search"
              onChange={onInputChange}
            ></input><i className={`${classes.magnifying} fas fa-search`}></i></Link>
            </div>
            
          </form>
            </li>
            <li className="nav-item">
              <a className={`${classes.navlink} nav-link`} href="Fake_page">
                Feed <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className={`${classes.navlink} nav-link`} to="/AllTools">
                Explore Tools
              </Link>
            </li>
            <li className="nav-item">
              <a className={`${classes.navlink} nav-link`} href="fake_page">
                Compare
              </a>
            </li>
            
           
          </ul>
          <ul className="navbar-nav">
          <li className={`nav-item ${classes.logn}`}>
            <Link to="/login"><button type="button" className={`btn ${classes.navbutton}`}>Log In</button></Link>
            </li>
            <li className={`nav-item ${classes.sign}`} >
           <Link to="/signup"> <button type="button" className={`btn ${classes.navbutton}`}>Sign Up</button></Link>
            </li>
          </ul>
         
        </div>
      </nav>
      {inputval.length > 1 ? (<SearchPage/>):null}
    </div>
  );
};

export default Navbar;
