import React,{useState} from "react";
import classes from "./BrowsCatogary.module.css";
import logo1 from "../../Assets/images/logo1.svg";
import logo2 from "../../Assets/images/logo2.svg";
import logo3 from "../../Assets/images/logo3.svg";
import logo4 from "../../Assets/images/logo4.svg";
import logo5 from "../../Assets/images/logo5.svg";
import logo6 from "../../Assets/images/logo6.svg";
import logo7 from "../../Assets/images/logo7.svg";
import logo8 from "../../Assets/images/logo8.svg";
import logo9 from "../../Assets/images/logo9.svg";
import logo10 from "../../Assets/images/logo10.svg";
import logo11 from "../../Assets/images/logo11.svg";
import logo12 from "../../Assets/images/logo12.svg";

const BrowsbyCatogary = () => {
  
  const [cardproperty,setCardProperty]=useState([
    {
        id:1,
        title:"401k",
        title1:"Bettermnet",
        title2:"Guidline",
        title3:"forusall",
        img1:logo1,
        img2:logo2,
        img3:logo3,
        para1:"saved by +286 People",
        para2:"saved by +364 People",
        para3:"saved by +283 People"
    },
    {
        id:2,
        title:"ATS",
        title1:"Breezy",
        title2:"Comeet",
        title3:"GreenHouse",
        img1:logo4,
        img2:logo5,
        img3:logo6,
        para1:"saved by +286 People",
        para2:"saved by +346 People",
        para3:"saved by +461 People"
    },
    {
      id:3,
      title:"Background Checks",
        title1:"checkr",
        title2:"Goodhire",
        title3:"HireRight",
        img1:logo7,
        img2:logo8,
        img3:logo9,
        para1:"saved by +371 People",
        para2:"saved by +371 People",
        para3:"saved by +493 People"

    },
    {
      id:4,
      title:"Benefits",
      title1:"ABD",
      title2:"Ameriflex",
      title3:"BeneTrac",
      img1:logo10,
      img2:logo11,
      img3:logo12,
      para1:"saved by +513 People",
      para2:"saved by +586 People",
      para3:"saved by +235 People"


    },          
      ])
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>Browse By Category</h1>
        <h2 className={classes.heading1}>Explore Populer Category</h2>
      </div>
      <div className="container">
        <div className="row">
        {cardproperty.map(cardval=>(
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
            <div key={cardval.id} className={`${classes.card} card`} style={{ width: "18rem" }}>
              <div className={`${classes.cardheader} card-header`}>{cardval.title}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><img className={classes.logo}src={cardval.img1} alt="logo1" /><p className={classes.title2}>{cardval.title1}</p><p className={classes.para}>{cardval.para1}</p></li>
                <li className="list-group-item"><img className={classes.logo}src={cardval.img2} alt="logo1" /><h1 className={classes.title2}>{cardval.title2}</h1><p className={classes.para}>{cardval.para2}</p></li>
                <li className="list-group-item"><img className={classes.logo}src={cardval.img3} alt="logo1" /><h1 className={classes.title2}>{cardval.title3}</h1><p className={classes.para}>{cardval.para3}</p></li>
              </ul>
            </div>
            </div>
        ))}
        <div className={classes.divbtn}>
                  <button  className={classes.btn}>See more all category</button>
              </div>
           
        
        </div>
      </div>
    </div>
  );
};

export default BrowsbyCatogary;
