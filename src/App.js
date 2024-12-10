import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import Registration from './components/Registration/Registration';
import NoPage from './components/NoPage/NoPage';
import Footer from './components/Footer/Footer';
import React, { Component } from 'react';
import SideDrawer from './components/SideDrawer/Siderawer';
import BackDrop from './components/SideDrawer/BackDrop';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    headerHeight: 0,
  };

  handleOpen = () => {
    this.setState({ sideDrawerOpen: true });
  };

  handleClose = () => {
    this.setState({ sideDrawerOpen: false });
  };
  
  componentDidMount() {
    this.updateHeaderHeight();
    window.addEventListener('resize', this.updateHeaderHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeaderHeight);
  }

  updateHeaderHeight = () => {
    const header = document.querySelector('.header');
    if (header) {
      this.setState({ headerHeight: header.offsetHeight });
    }
  };

  render() {
    const { headerHeight, sideDrawerOpen } = this.state;
    return (
      <Router basename='/'>
        <div className="home">
          <Header openSideBar={this.handleOpen} closeSideBar={this.handleClose} isSidebarOpen={sideDrawerOpen} />
          {sideDrawerOpen && (
            <div className='sidedrawer'>
              <SideDrawer closeSideBar={this.handleClose} />
              <BackDrop closeSideBar={this.handleClose} />
            </div>
          )}
          <Routes>
            <Route path="/" element={<Main style={{ paddingTop: `${headerHeight}px` }} />} />
            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
