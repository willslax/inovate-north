import React from 'react';
import '../../css/style.css';
import sponsors from '../../assets/Patner.jpg';
import sponsor2 from '../../assets/sponsor2.jpg';

const Patners = () => {
  return (
    <section className='patners-section' id='patners'>
      <div className="patners-content">
        <div className="patners-title">
            <h1>Partners and Sponsors</h1>
        </div>
        <div className="patners-img-spread">
            <img src={sponsors} alt="patners&sponsors" className='sponsor1'/>
            <div className="below">
                <img src={sponsor2} alt="sponsor" className='sponsor2'/>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Patners;
