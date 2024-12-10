import React from 'react';
import Hero from '../Hero/Hero';
import ParticipationInfo from '../Participation/ParticipationInfo';
import Patners from '../Partners/Patners';
import Scheduled from '../Scheduled/Scheduled';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <div>
      <Helmet>
      <title>Innovate North - Hack for Progress 2024</title>
      <meta name="description" content="Innovate North – Hack for Progress is a transformative hackathon aimed at addressing some of Northern Nigeria’s most pressing challenges through innovative, technology-enabled solutions. The event brings together a diverse group of young innovators, technologists, and community leaders to develop impact solutions that focus on 5 critical areas... Dec. 2024" />
      </Helmet>
        <Hero />
        <About />
        <ParticipationInfo />
        <Scheduled />
        <Patners />
    </div>
  )
}

export default Main;
