import React from 'react';
import '../../css/style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const SideDrawer = ({closeSideBar, openSideBar}) => {
  let Classes = "nav-links-side";
  if(openSideBar) {
    Classes = "nav-links-side open";
  }
  const homeButton = () => {
    navigate('/');
    closeSideBar();
  };
  const navigate = useNavigate();
  return (
    <nav className={Classes}>
      <div className="navlinkscontent">
        {/* <li onClick={closeSideBar}><a href="/">Home</a></li>
        <li onClick={closeSideBar}><a href="/#about">About</a></li>
        <li onClick={closeSideBar}><a href="/#participation">Participation</a></li>
        <li onClick={closeSideBar}><a href="/#schedule">Schedule</a></li>
        <li onClick={closeSideBar}><a href="/#prize">Prize</a></li>
        <li onClick={closeSideBar}><a href="/#patners">Partners & Sponsors</a></li> */}
        <li onClick={homeButton} style={{ cursor: 'pointer' }}>Home</li>
          <li onClick={closeSideBar}><HashLink smooth to="/#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</HashLink></li>
          <li onClick={closeSideBar}><HashLink smooth to="/#participation" style={{ textDecoration: 'none', color: 'inherit' }}>Participation</HashLink></li>
          <li onClick={closeSideBar}><HashLink smooth to="/#schedule" style={{ textDecoration: 'none', color: 'inherit' }}>Schedule</HashLink></li>
          <li onClick={closeSideBar}><HashLink smooth to="/#prize" style={{ textDecoration: 'none', color: 'inherit' }}>Prize</HashLink></li>
          <li onClick={closeSideBar}><HashLink smooth to="/#patners" style={{ textDecoration: 'none', color: 'inherit' }}>Partners & Sponsors</HashLink></li>
        <div className="btn-reg" onClick={closeSideBar}>
          <NavLink to="/register">
            <Button 
              variant="contained"
              className="register"
              size="small">Register Now
            </Button>
          </NavLink> 
        </div>
        
      </div>
    </nav>
  )
}

export default SideDrawer;