import React,{useState} from "react";
import Footer from "../Footer/Footer";
import classes from "./SearchPage.module.css";
const SearchPage = () => {
    const[inputval,setinputval]=useState("");
    const onInputChange=(event)=>{
  }
  return (
    <div> 
      <div className={`${classes.searchdiv} container`}>
        <div className="row">
          <div className="col-lg-12">
            <input
              className={`${classes.search} form-control mr-sm-2`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <i className={`${classes.magnifying} fas fa-search`}></i>
          </div>
        </div>
      </div>
      <div className={classes.maincontainer}>
        <div className={`container ${classes.cardsclass}`}>
            <h1 className={classes.found}>3 results Found</h1>
          <div className="card mt-5">
            <div className="card-body">
              <h1 className={classes.cardtitle}>Dynamically Procrastinate B2C</h1>
              <p className={classes.cardpara}> 
              ourwebaddress.com/articles/procrastinate
              </p>
              <p className={classes.cardpara2}>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
              </p>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-body">
            <h1 className={classes.cardtitle}>Synergize</h1>
              <p className={classes.cardpara}> 
              ourwebaddress.com/articles/procrastinate
              </p>
              <p className={classes.cardpara2}>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
              </p>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-body">
              <h1 className={classes.cardtitle}> Cross Media</h1>
              <p className={classes.cardpara}> 
              ourwebaddress.com/articles/procrastinate
              </p>
              <p className={classes.cardpara2}>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#F7F7F7",height:"25px"}}></div>
      <Footer />
    </div>
  );
};

export default SearchPage;
