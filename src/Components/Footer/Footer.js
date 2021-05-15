import React from "react";
import classes from "./Footer.module.css";



const Footer = () => {
  return (
    <div>
      <div id={classes.footer_new}>
        {/* Footer Top Section */}
        <div >
          <div className="container m-0 px-3">
            
          </div>
        </div>
        {/* Footer Top Section / End */}

        {/* Footer Middle Section */}

        <div
          style={{
           
            padding: "60px 0 40px 0",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <aside className={classes.aside}>
                  <div>
                    <h4>Tools & Sevices</h4>
                    <ul>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Compare Tools
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Search
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Submit A Tool
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Stories & Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>{" "}
              </div>
              <div className="col-xs-12 col-sm-6  col-md-3 col-lg-3 ">
                <aside className={classes.aside}>
                  <div>
                    <h4 className={classes.pop}>Top Comparisons</h4>
                    <ul>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Gusto Vs Rippling
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          ADP vs Paylocity
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Greenhouse vs Lever
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>{" "}
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <aside className={classes.aside}>
                  <div>
                    <h4 className={classes.pop}>Company</h4>
                    <ul>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Philosophy
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          API
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Careers
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Advertise with us
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} to="/contact/">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>{" "}
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <aside className={classes.aside}> 
                  <div>
                    <h4 className={classes.pop}>Terms</h4>
                    <ul>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Privacy
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          Copyright c 2020 HRtechbase, Inc.
                        </a>
                      </li>
                      <li className={classes.sp}>
                        <a className={classes.left} href="#Fake">
                          All rights reserved
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Middle Section / End */}

        {/* Footer Copyrights */}
        {/* <div className="py-4">
          <div className="container">
            <div className="row ">
              <div className="col-8 align-middle ">
                © RBD 2021. All Rights Reserved.
              </div>
              <div className="col-2"></div>
              <div className="col-2 ">
                <ul className="d-flex justify-content-around">
                  <li>
                    <a target="_blank" title="twitter" href="dummy">
                      <i className="bi bi-twitter fs-5" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" title="linkedin" href="dummy">
                      <i className="bi bi-linkedin fs-5" />
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div> */}
          {/* Footer Copyrights / End */}
        {/* Footer / End */}
      </div>
    </div>
  );
};

export default Footer;
