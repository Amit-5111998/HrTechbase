import React,{useState} from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const LoggedInNavbar = () => {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
  return (
    <div className={classes.main}>
       {show ? <div onClick={closeModalHandler} className={classes.backdrop}></div> :null}
      <nav
        className={`${classes.navbar} navbar navbar-expand-lg navbar-light fixed-top`}
      >
           
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
                  <input
                    className={`${classes.search} form-control mr-sm-2`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <i className={`${classes.magnifying} fas fa-search`}></i>
                </div>
              </form>
            </li>
            <li className="nav-item">
              <a className={`${classes.navlink} nav-link`} href="Fake_page">
                Feed <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`${classes.navlink} nav-link`} href="fake_page">
                Explore Tools
              </a>
            </li>
            <li className="nav-item">
              <a className={`${classes.navlink} nav-link`} href="fake_page">
                Compare
              </a>
            </li>
            <li className="nav-item">
              <div className="collapse navbar-collapse" id="navbar-list-4">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    
                    <a
                      className="nav-link dropdown-toggle"
                      href="fake_page"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    //   onClick={()=>setShow(show===true ? false:true)}
                    >
                      <img
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                        width={40}
                        height={40}
                        className="rounded-circle"
                        alt="imag"
                      />
                      <label style={{fontSize:"16px",fontFamily:"Poppins",fontWeight:"600"}}>Andy</label>
                    </a>
                    <Fade top big>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{border:"0",marginTop:"19px",marginLeft:"-125px"}}
                    >
                   <div className="card" style={{width: '14rem',height:"1rem" ,borderRadius:"25px"}}>
  <ul className={`list-group list-group-flush ${classes.listtext}`}>
    <li className="list-group-item"><i class="far fa-user-circle"></i>{" "}  My Profile</li>
    <li className="list-group-item"><i class="fas fa-key"></i>{" "}  Chnage Password</li>
   <Link to="/"> <li className="list-group-item"><i class="fas fa-sign-out-alt"></i>{" "}Logout</li></Link>
  </ul>
</div>

                    </div>
                    </Fade>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LoggedInNavbar;
