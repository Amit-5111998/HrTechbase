import React from 'react'

import classes from "./Explore.module.css";
import Round12 from "./Svg/Round12.svg";


const Explore = () => {
    return (
        <div className={classes.explore}>
           <div className={classes.explore2}>
           <img className={classes.R12} src={Round12} alt="Round">   
           
            </img> 
            <div>
                <h1 className={classes.title2}>
                    New:HRTechBase Landscape 2020
                </h1>
            </div> 
            <div>
                <h1 className={classes.title}>
                    The 2020 Edition Of MarTech<br/>LandScape Is Here!
                </h1>
            </div> 
            <div>
                <button className={classes.btn}>
                    Explore all the new companies
                </button>
            </div>
           </div>
        </div>
    )
}

export default Explore
