import React, { useState } from "react";
import classes from "./FeedPage.module.css";
import activity from "./svgs/activity.svg";
import trending from "./svgs/trending.svg";
import advice from "./svgs/Advice.svg";
import Decisions from "./svgs/decision.svg";
import visiual from "./svgs/Visualstudio.svg";
import js from "./svgs/js.svg";
import node from "./svgs/node.svg";
import react from "./svgs/react.svg";
import python from "./svgs/python.svg";
import kuber from "./svgs/kubernet.svg";
import titleciecle from "./svgs/titlecircle.svg";
import feedcircle from "./svgs/FeedCircle.svg";
import icons from "./svgs/icons.svg";
import jeera from "./svgs/jeera.svg";
import upvote from "./svgs/upvote.svg";
import comment from "./svgs/commentphoto.svg";
import save from "./svgs/save.svg";

const FeedPage = () => {
  const [upvoter,setUpvote]=useState(0);
  const UpvoteCounter =()=>{
      setUpvote(upvoter+1)
  }
  return (
    <div className={`container-fluid ${classes.background}`}>
      <div className="row ml-5 mr-5">
        <div
          className="col-sm-12 col-md-2 col-lg-2 mt-5"
          style={{ width: "100%" }}
        >
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className={`list-group-item ${classes.header}`}>
                Activity Feed
              </li>
              <li
                className={`list-group-item ${classes.subheadind}`}
                style={{ backgroundColor: "#EDEDED" }}
              >
                <img
                  src={activity}
                  alt="activity"
                  style={{ marginRight: "10px" }}
                ></img>{" "}
                My Feed
              </li>
              <li className={`list-group-item ${classes.subheadind}`}>
                <img
                  src={Decisions}
                  alt="activity"
                  style={{ marginRight: "10px" }}
                ></img>
                Saved Decisions
              </li>
              <li className={`list-group-item ${classes.subheadind}`}>
                <img
                  src={trending}
                  alt="activity"
                  style={{ marginRight: "10px" }}
                ></img>
                Trending
              </li>
              <li className={`list-group-item ${classes.subheadind}`}>
                <img
                  src={advice}
                  alt="activity"
                  style={{ marginRight: "10px" }}
                ></img>
                Advice
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 mt-5">
          <div className={classes.supermain}>
            <div className={`${classes.mainfeed}`}>
              <h1 className={`${classes.mainFeedHeading}`}>My Feed</h1>
            </div>
            <div className='container'>
            <div className={`card ${classes.cardHeading} my-3`}>
              <div className={`card-body ${classes.titlecircle} p-0 p-3`} >
                <img src={titleciecle} alt="titlecircle" style={{marginTop:"3px"}}></img>
                {/* <div className={classes.circle1}>A</div> */}
                <p style={{fontSize:"13px",fontFamily:'Poppins',color:"#787878",marginTop:"-25px",marginLeft:"45px"}}>Get Advice or share a Decision</p> 
              </div>
            </div>
            </div>
            {/* feeds Post */}
            <div className="p-3">
              <div className={`card ${classes.feedpost}`}>
                <ul
                  className="list-group list-group-flush"
                  // style={{ border: "1px solid rgba(0,0,0,.125)" }}
                >
                  <li className={`list-group-item`} style={{padding: "10px 10px 0px 10px",marginLeft:"5px"}}>
                    <img src={feedcircle} alt="feedcircle"></img>
                    <h1 className={classes.name}>Christopher Cooke</h1>
                    <br />
                    <p className={classes.position}>
                      CEO at Old Street Solution - 3 days ago
                    </p>
                    <div className={classes.icons}>
                      <img
                        className={classes.icons}
                        src={icons}
                        alt="icons"
                      ></img>
                    </div>
                    <p className={classes.feedpara}>
                      Jlra 's dashboards are great, but for wider collaboration,
                      reporting to management and to avoid informational siloes.
                      Confluence Is a wonderful place to share Jira Dashboards.
                      Atlassian Consultant Prodigy, Tom Harris, shares his
                      thoughts on all the options for creating the best Jira
                      reports in Confluence in the blog below.{" "}
                    </p>
                  </li>
                  <li className="list-group-item">
                    <img src={jeera} alt="jeera"></img>
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        marginTop: "-23px",
                        marginLeft: "29px",
                        marginBottom:"1px"
                      }}
                    >
                      How to Create Jira Reports and Charts in Confluence
                      (oldstreetsolutions.com)
                    </p>
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      fontSize: "12px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                  >
                    {upvoter} Upvotes -2.4k views
                  </li>
                  <li className="list-group-item">
                    <img className="btn" src={upvote} alt="upvote" style={{backgroundColor:"white",marginLeft:"-16px"}} onClick={()=>UpvoteCounter()} />
                    upvote
                    <img
                      src={comment}
                      className="btn" 
                      alt="comment"
                      style={{ marginLeft: "20px",backgroundColor:"white" }}
                    />
                    Comment
                    <img className="btn" src={save} alt="save" style={{backgroundColor:"white", marginLeft: "20px" }} />
                    save
                  </li>
                </ul>
                <div
                  style={{ border: "1px solid rgba(0,0,0,.125)" }}
                  className={`card-footer ${classes.cardfooter}`}
                >
                  <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="addon-wrapping"
                        style={{ backgroundColor: "white", border: "0" }}
                      >
                        <img src={titleciecle} alt="titlecircle"></img>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      style={{ border: "0" }}
                      placeholder="Write a Comment"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-4 mt-5">
          <div
            className="card"
            style={{ width: "17rem", borderRadius: "10px" }}
          >
            <div className="card-header">My Tools</div>
            <ul>
              <li>
                <button className={classes.savedbtn}>Saved</button>
                <button className={classes.watchlistbtn}>Watchlist</button>
              </li>
              <li className={classes.txt}>
                <img
                  src={visiual}
                  alt="visiual"
                  style={{ marginRight: "10px" }}
                />
                Visula Studio Code{" "}
                <button className={classes.viewbtn}>view</button>
              </li>
              <li className={classes.txt}>
                <img src={js} alt="visiual" style={{ marginRight: "10px" }} />
                Java Script{" "}
                <button
                  className={classes.viewbtn}
                  style={{ marginLeft: "57px" }}
                >
                  View
                </button>
              </li>
              <li className={classes.txt}>
                <img src={node} alt="visiual" style={{ marginRight: "10px" }} />
                Node.js{" "}
                <button
                  className={classes.viewbtn}
                  style={{ marginLeft: "81px" }}
                >
                  View
                </button>
              </li>
              <li className={classes.txt}>
                <img
                  src={react}
                  alt="visiual"
                  style={{ marginRight: "10px" }}
                />
                React{" "}
                <button
                  className={classes.viewbtn}
                  style={{ marginLeft: "93px" }}
                >
                  View
                </button>
              </li>
              <li className={classes.txt}>
                <img
                  src={python}
                  alt="visiual"
                  style={{ marginRight: "10px" }}
                />
                Python{" "}
                <button
                  className={classes.viewbtn}
                  style={{ marginLeft: "85px" }}
                >
                  View
                </button>
              </li>
              <li className={classes.txt}>
                <img
                  src={kuber}
                  alt="visiual"
                  style={{ marginRight: "10px" }}
                />
                Kubernet{" "}
                <button
                  className={classes.viewbtn}
                  style={{ marginLeft: "70px" }}
                >
                  View
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#F7F7F7",height:"25px"}}></div>
    </div>
  );
};

export default FeedPage;
