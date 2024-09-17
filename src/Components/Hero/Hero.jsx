import React from 'react';
import "./Hero.css";
import Diamond from "../../assets/diamond.jpg";
import Sun from "../../assets/sun.jpg";
import Plan from "../../assets/plan.jpg";
import Star from "../../assets/star.jpg";
import Leave from "../../assets/leave.jpg";
import Girl2 from "../../assets/girl2.png";
import Men2 from "../../assets/men2.png"
function Hero() {
  return (
    <div>
        <div className="redbar "></div>
        <div className="bluebar"></div>
        <div className="container">
            <div className="left">
                <img src={Men2} alt="" />
            </div>
            <div className="centerDiv">
                <div className="icons">
                    <img src= {Plan} alt="" />
                    <img src= {Sun} alt="" />
                    <img src= {Leave} alt="" />
                    <img src= {Star} alt="" />
                </div>
                <div className="diamond">
                     <img src = {Diamond} alt="" />
                </div>
                <h1>
                    <span>Naharkatia needs </span>
                    <span>newness. </span>
                </h1>
                <h1>
                    <span>We uplift the </span>
                    <span>catalysts.</span>
                </h1>
                <button className="btn">Season 2 Coming Soon</button>
                <div className="Text">
                <span>
                    Project Naharkatia provides Rs. 50,000 Scholarships to a young<br/>
                    talents, determined to work for the betterment of our region.
                </span>
            </div>
            </div>
            <div className="right">
              <img src={Girl2} alt="" />
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero
