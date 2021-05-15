import React, { useState } from "react";
import classes from "./Populartools.module.css";
import logo1 from "../../Assets/images/logo1.svg";
import logo2 from "../../Assets/images/logo2.svg";
import logo3 from "../../Assets/images/logo3.svg";
import logo4 from "../../Assets/images/logo4.svg";
import logo5 from "../../Assets/images/logo5.svg";
import logo6 from "../../Assets/images/logo6.svg";
import cardcount from "./Svg/cardcountimg.svg";
const Populartools = () => {

    const [cardproperty,setCardProperty]=useState([
        {
            id:1,
            title1:"401k",
            title2:"Bettermnet",
            img:logo1,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:2,
            title1:"401k",
            title2:"Guidline",
            img:logo2,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:3,
            title1:"401k",
            title2:"forusall",
            img:logo3,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:4,
            title1:"ATS",
            title2:"Breezy",
            img:logo4,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:5,
            title1:"ATS",
            title2:"Comeet",
            img:logo5,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:6,
            title1:"ATS",
            title2:"GreenHouse",
            img:logo6,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        
    ])
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>Popular Tools</h1>
      </div>
      <div className="container">
        <div className="row">
         
              {cardproperty.map(cardval=>(
                   <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                 <div key={cardval.id} className="card" style={{ width: "22rem" }}>
                 <div className="card-body">
                   <img
                     className={`${classes.cardimage}`}
                     src={cardval.img}
                     alt="Card"
                   />
                   <h5 className={`${classes.cardtitle} card-title`}>{cardval.title1}</h5>
                   <br />
                   <h5 className={`${classes.cardtitle2} card-title`}>
                     {cardval.title2}
                   </h5>
                   <br />
                   <p className={`${classes.cardtext} card-text`}>
                     {cardval.para}
                   </p>
                   <img
                     className={classes.cardcount}
                     src={cardcount}
                     alt="cardcount"
                   />
                   <a href="#" className={classes.link}>
                     see All<i class="fas fa-long-arrow-alt-right"></i>
                   </a>
                 </div>
               </div>
               </div>
              ))}
              <div className={classes.divbtn}>
                  <button  className={classes.btn}> All Tools</button>
              </div>
           
            
          </div>
          
        </div>
      </div>
    
  );
};

export default Populartools;
