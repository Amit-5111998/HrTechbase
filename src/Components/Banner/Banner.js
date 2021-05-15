import React from "react";
import classes from "./Banner.module.css";
import banner from "./banner.svg"
const Banner = () => {
  return (
    <div className={`${classes.topmargin}`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5">
            <div className={classes.textstyle}>
          <h1 className={`${classes.h1font} display-4`}>Find the Right HR</h1>
          <h1 className={`${classes.h1font} display-4`}>Tools For Your Business</h1>
          </div>
          <p className={`${classes.ptag} lead`}>
           HRtechbase is a free platform to help HR teams optimise their<br/>
           Investment in HR technology
          </p>
          <button type="button" class="btn btn-primary">Get Started</button>
        </div>
        <div className="col-sm-12 col-lg-7">
            <img className={classes.bannerimg} src={banner} alt="banner"/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
