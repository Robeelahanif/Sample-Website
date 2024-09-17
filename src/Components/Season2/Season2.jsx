import React from 'react'
import './Season2.css';
import Video from "../../assets/video.jpg";
import Vbtn from "../../assets/vbtn.png";
const Season2 = () => {
  return (
    <div className='season2'>
       <h1>Presenting The Project Naharkatia</h1>
       <h1>Scholarship <span>Season 2</span></h1>
       <span>Another season to fund another batch of dreamers and believers.</span>
       <div className='video'>
        <img src={Video} alt="" width={"55%"}  />
        <img src={Vbtn} alt="" className='vbtn' />
       </div>
    </div>
  )
}

export default Season2
