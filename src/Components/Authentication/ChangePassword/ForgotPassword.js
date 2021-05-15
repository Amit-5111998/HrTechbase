import React from "react";
import classes from "./ForgotPassword.module.css";

import google from "./googlebtn.svg";
import Logo from "./Logo.svg";
import {Link} from "react-router-dom"
const ForgotPassword = () => {
  return (
    // <div>
    //     <div className="row">
    //         <div className={`col-lg-6 ${classes.sec1}`}>
    // <div className={classes.sec1}>
    //     <div className={`container-fluid mt-5 `}>
    //      {/* <img className={classes.banner} src={banner} alt="banner"/>  */}

    //      </div>

    // </div>

    // </div>
    // <div className="col-lg-6">
    // <div className={classes.sec2}>

    // </div>
    // </div>
    // </div>
    // </div>
    <div className="container-fluid">
      <div className="row no-gutter">
        {/* The image half ,padding: "199.5px 0 */}
        <div
          className="col-md-6 d-none d-md-flex bg-image"
          style={{ backgroundColor: "#333333", height: "100vh" }}
        >
          <div className="container">
            <img className={classes.container1} src={Logo} alt="logo" />
            <div className={classes.loginpage}>Change Password</div>
            <h1 className={classes.title}>Welcome To Hr Tech Base!</h1>
            <p className={classes.para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className={classes.divbtn}>
            <Link to="/">  <button className={classes.btn}>Back to DashBoard</button> </Link>
            </div>
          </div>
        </div>
        {/* The content half style={{padding: "161.5px 0",backgroundColor:"white"}} */}
        <div className="col-md-6 " style={{ height: "100vh" }}>
          <div className="login d-flex align-items-center py-5">
            {/* Demo content*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto " style={{marginTop:"120px"}}>
                  
                   
                    
                 
                  <h3 className={`${classes.title4} `}>Change Password</h3>
                  <p className="text-muted mb-4" style={{fontSize:"14px"}}>
                  Fill in the fields below and you'll be good to go.
                  </p>
                  <form>
                    
                   
                    <div className={`mb-3 ${classes.inputfield} d-flex align-items-center justify-content-evenly`}>
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email Address*"
                        required
                        autofocus
                        className="form-control rounded-pill  shadow-sm px-4"
                        style={{border:"0"}}
                      />
                        <i class="far fa-envelope" style={{marginRight:"8px"}}></i>
                    </div>
                    <div className={`mb-3 ${classes.inputfield} d-flex align-items-center justify-content-evenly`}>
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="New Password"
                        required
                        className="form-control rounded-pill  shadow-sm px-4 text-primary"
                        style={{border:"0"}}
                      />
                        <i class="fa fa-key" style={{marginRight:"8px"}}></i>
                    </div>
                    <div className={`mb-3 ${classes.inputfield} d-flex align-items-center justify-content-evenly`}>
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="form-control rounded-pill  shadow-sm px-4 text-primary"
                        style={{border:"0"}}
                      />
                        <i class="fa fa-key" style={{marginRight:"8px"}}></i>
                    </div>
                    
                    <button
                      type="submit"
                      className={`btn  btn-block  mb-2 rounded-pill shadow-sm ${classes.submitbtn}`}
                    >
                      Change Password
                    </button>
                   
                  </form>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default ForgotPassword;
