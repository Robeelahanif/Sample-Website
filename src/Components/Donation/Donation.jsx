import React from 'react'
import './Donation.css';
import Men from "../../assets/men.png"
const Donation = () => {
  return (
    <div className='d-container'>
        <img src={Men} alt="" />
         <div className="d-content">
            <h1>The future of Naharkatia is in your charity</h1>
            <span>Naharkatia's future is bright, talented, and ready to leap forward.</span>
            <button className="d-btn">Donate Now</button>
         </div>
         
    </div>
  )
}

export default Donation
