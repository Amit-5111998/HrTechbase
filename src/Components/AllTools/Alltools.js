import React,{useState} from "react";
import classes from "./Alltools.module.css";
import logo1 from "../../Assets/images/logo1.svg";
import logo2 from "../../Assets/images/logo2.svg";
import logo3 from '../../Assets/images/logo3.svg';
import savebutton from '../../Assets/images/savebutton.svg';
import view from "../../Assets/images/view.svg";
import tag from "../../Assets/images/tag.svg";

const Alltools = () => {
    const [cardproperty,setCardProperty]=useState([
        {
            id:1,
            img1:savebutton,
            img2:view,
            title2:"Bettermnet",
            img:logo1,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:2,
            img1:savebutton,
            img2:view,
            title2:"Guidline",
            img:logo2,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
        {
            id:3,
            img1:savebutton,
            img2:view,
            title2:"forusall",
            img:logo3,
            para:"Betterment is built to help you make the most of your money—today, tomorrow, and beyond. We help you unify your financial life across spending, saving, investing, and retirement, with personalized, fiduciary advice that puts you and your needs first."
        },
    ]);
  return (
    <div style={{marginTop:"120px" , backgroundColor:"#F7F7F7"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <div className="card" style={{ width: "18rem",height:"531px" }}>
              <div className={`card-header ${classes.cardheader}`}>Categories</div>
              <ul className={`list-group list-group-flush ${classes.list}`}>
                <li className="list-group-item">All Tools (76)</li>
                <li className="list-group-item">401k (3)</li>
                <li className="list-group-item">ATS (13)</li>
                <li className="list-group-item">Background checks (3)</li>
                <li className="list-group-item">Benifits(13)</li>
                <li className="list-group-item">Feedback + Performence (8)</li>
                <li className="list-group-item">HRIS (7)</li>
                <li className="list-group-item">Learning managment (7)</li>
                <li className="list-group-item">Office Managment(4)</li>
                <li className="list-group-item">Org Chart(3)</li>
                <li className="list-group-item">ETC.</li>
                
              </ul>
            </div>
          </div>

          <div className="col-lg-8 mt-5 ml-5">
          <form className="form-inline my-2 my-lg-0">
                <div className={classes.relative}>
                
            <input
              className={`${classes.search} form-control mr-sm-2`}
              type="search"
              placeholder="No Result Found"
              aria-label="Search"
            ></input><i className={`${classes.magnifying} fas fa-search`}></i>
            </div>
            
          </form>
          <h1 className={classes.maintitle}>401K</h1>
          <p className={classes.para}>Showing 950 matches Solutions</p>
        <div className="row mb-5">
            
         
              {cardproperty.map(cardval=>(
                  <div className="col-sm-12 col-md-6 col-lg-6">
                 <div key={cardval.id} className="card mt-5 space-between" style={{ width: "22rem" ,height:"337px"}}>
                     
                 <div className="card-body">
                   <img
                     className={`${classes.cardimage}`}
                     src={cardval.img}
                     alt="Card"
                   />
                   <img className={`${classes.cardtitle} card-title`} src={cardval.img1} alt="img1"></img>
                   <img className={classes.view} src={cardval.img2} alt="img2"></img>
                   
                   <br />
                   <h5 className={`${classes.cardtitle2} card-title`}>
                     {cardval.title2}
                   </h5>
                   <br />
                   <p className={`${classes.cardtext} card-text`}>
                     {cardval.para}
                     
                   </p>
                   <a href="Fakepage" className={classes.link}>
                    <img src={tag} alt="tag"></img>  ATS
                   </a>
                   
                  
                 </div>
               </div>
               </div>
               
              ))}
             
            
          </div>
           
       

          </div>
        </div>
      </div>
    </div>
  );
};

export default Alltools;
