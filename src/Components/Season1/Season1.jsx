import React from 'react';
import './Season1.css';
import CountUp from 'react-countup';
const Season1 = () => {
  return (
    <div className='season1'>
        <h1>Season 1 <u>Highlights</u></h1>
      <div className="countup">
        <div className="counter">
            <h1><CountUp start={0} end={60} duration={2} delay={0}/>+</h1>
            <span>Applicants</span>
        </div>
        <div className="counter">
            <h1><CountUp start={0} end={200} duration={2} delay={0}/>+</h1>
            <span>Attendees</span>
        </div>
        <div className="counter">
            <h1><CountUp start={0} end={10} duration={2} delay={0}/>+</h1>
            <span>Esteemed Guests</span>
        </div>
        <div className="counter">
            <h1><CountUp start={0} end={3} duration={2} delay={0}/></h1>
            <span>Winners</span>
        </div>
        </div>
        <div className="content">
            <div className="blank"></div>
            <div className="text">
                <h2>
                    Sri Taranga Gogoi, Hon'ble MLA of Naharkatia, graciously<br/>
                    marked his esteemed presence.
                </h2>
                <span>
                    Dr. Pranjal Buragohain, Founder of Vidya The Living School, shared wisdom on <br/>
                    nurturing talents from disadvantaged walks of life.
                </span>
                <span>
                    Mr. Ranjit Kumar Buragohain, former Block Development Officer, at Joypur Block<br/> 
                    planted seeds of sustainable development.
                </span>
                <span>
                    Dr. Jyotiprasad Konwar, Principal of Naharkatia College, shared inspiring words <br/>
                    about passion and persistence.
                </span>
            </div>
        </div>
    </div>
  )
}

export default Season1;
