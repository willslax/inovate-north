import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import Logo from '../../assets/logo.png';
import FormfacadeEmbed from "@formfacade/embed-react";
import { Helmet } from 'react-helmet';
import { CircularProgress } from '@mui/material';

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = () => {
    setIsSubmitting(true);
    setSubmitMessage('Form submitted successfully! Thank you for registering.');
    setTimeout(() => setIsSubmitting(false), 700);
  };

  useEffect(() => {
    const timer = setTimeout(() => setFormLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='registration'>
      <Helmet>
        <title>Innovate North Hackathon - Registration</title>
        <meta name="description" content="Register for Innovate North, a hackathon addressing Northern Nigeria's challenges through innovative, tech-enabled solutions." />
        <meta property="og:title" content="Innovate North Hackathon - Registration" />
        <meta property="og:description" content="Join Innovate North Hackathon to create tech solutions for Northern Nigeria's most pressing issues." />
        <meta property="og:image" content={Logo} />
      </Helmet>
      <div className="registration-form-container">
        <div className="form-header">
            <img src={Logo} alt="Innovate North logo" className="registration-logo" />
            <h1>Innovate North Hackathon Registration</h1>
        </div>
        {!formLoaded && <div className="loading-spinner">Loading form...</div>}
        <div className="google-form">
          {formLoaded ? (
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/110145051895076864608/form/1FAIpQLSd2cZZIKy4yDrn9JZigDP6By6GtGhl4FD4jSdD_SgLnGzubCQ/classic.js/?div=ff-compose"
              onSubmitForm={handleFormSubmit}
            />
          ) : (
            <CircularProgress style={{marginTop: '20px'}}/>
          )}
        </div>
        {isSubmitting && <p className="submission-message">{submitMessage}</p>}
      </div>
    </div>
  )
}

export default Registration;
