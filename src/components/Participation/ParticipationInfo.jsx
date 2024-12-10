import React from 'react';
import '../../css/style.css';
import infoBanner from '../../assets/info-banner.png'

const ParticipationInfo = () => {
  return (
    <section className='participation-info' id='participation'>
      <div className="participation-info-header">
        <div className="info-header-content">
            <h1>Participation Information</h1>
            <p>The hackathon is designed to foster creativity, collaboration, and entrepreneurship.  Innovate North provides a platform for participants to showcase their ideas, receive mentorship, and gain access to incubation programs that turn concepts into scalable solutions. </p>
        </div>
      </div>
      <div className="participation-info-body">
        <div className="participation-card">
            <div className="participation-info-card">
                <div className="card-content">
                    <div className="elig-req">
                        <h2>Team Eligibility:</h2>
                        <li>Participants must reside in Northern Nigeria.</li>
                        <li>Projects must address one of the sectors: Creative Fashion, Digital Trade, Circular Economy, Education, or Agriculture.</li>
                        <li>Individuals or teams (up to 5 people) with diverse skill sets are encouraged. </li>
                        <li>Projects should be in the concept, prototype, or early development stage. </li>
                        <li>Open to participants aged 18 to 35.</li>
                    </div>
                    <div className="elig-req">
                        <h2>Solution Requirements:</h2>
                        <li>Product and traction, can be tech-aided or non-tech.</li>
                    </div>
                </div>
            </div>
        </div>
        <div className="participation-info-banner">
            <img src={infoBanner} alt="participation_info" />
        </div>
      </div>
    </section>
  )
}

export default ParticipationInfo;
