import React from 'react';
import { Button, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/logo.png';
import Menu from '../../assets/menu.svg';
import '../../css/style.css';

const Header = ({ openSideBar, closeSideBar, isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegistrationPage = location.pathname === '/register';

  const handleButtonClick = () => {
    if (isRegistrationPage) {
      navigate('/'); // Navigate back to the main page
    } else {
      navigate('/register'); // Navigate to the registration page
    }
  };

  const handleMenuClick = () => {
    if (isSidebarOpen) {
      closeSideBar();
    } else {
      openSideBar();
    }
  };

  const homeButton = () => {
    navigate('/');
  };

  return (
    <header style={{ background: '#fff' }} className="header">
      <Container maxWidth="xl" className="header-container">
        <div className="logo">
          <img src={Logo} alt="logo" onClick={homeButton} style={{ cursor: 'pointer' }} />
        </div>
        <ul>
          <li onClick={homeButton} style={{ cursor: 'pointer' }}>Home</li>
          <li><HashLink smooth to="/#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</HashLink></li>
          <li><HashLink smooth to="/#participation" style={{ textDecoration: 'none', color: 'inherit' }}>Participation</HashLink></li>
          <li><HashLink smooth to="/#schedule" style={{ textDecoration: 'none', color: 'inherit' }}>Schedule</HashLink></li>
          <li><HashLink smooth to="/#prize" style={{ textDecoration: 'none', color: 'inherit' }}>Prize</HashLink></li>
          <li><HashLink smooth to="/#patners" style={{ textDecoration: 'none', color: 'inherit' }}>Partners & Sponsors</HashLink></li>
        </ul>
        <div className="header-btn">
          <Button
            variant="contained"
            className="register"
            size="small"
            onClick={handleButtonClick}
          >
            {isRegistrationPage ? '< Go Back' : 'Register Now'}
          </Button>
        </div>
        <div onClick={handleMenuClick}>
          <img src={Menu} className="menu" alt="Menu Icon" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
