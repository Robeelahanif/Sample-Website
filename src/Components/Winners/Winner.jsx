import React from 'react';
import "./Winner.css";
import Sun from "../../assets/sun.jpg";
const Winner = () => {
  return (
    <div className='w-cards'>
        <div className="image">
            <img src = {Sun} alt="" />
        </div>
      <h1>Season 1 Winners</h1>
      <div className="cards">
        <div className="card">
            <div></div>
            <h1>PRIYANGSHU BANERJEE</h1>
            <span>
                Praised by Shantanu Hazarika for his craft, Peaby is a creative genius, 
                proficient in graphic design, doodle art, and video.
            </span>
            <button>LEARN MORE</button>
        </div>
        <div className="card">
            <div></div>
            <h1>NIPU SAIKIA
            </h1>
            <span>
                A maestro of Sattriya Sanskriti, Nipu
                has made it his mission to keep
                Assamese tradition alive through his
                works
            </span>
            <button>LEARN MORE</button>
        </div>
        <div className="card">
            <div></div>
            <h1>NAVADEEP GOGOI
            </h1>
            <span>
                A homegrown armwrestler, Navadeep
                represented India at a global stage and
                brought glory to both our country and.
            </span>
            <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Winner
