
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import Search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [scrollY, setScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideNavbar(true); 
      } else {
        setHideNavbar(false); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1000);
  };

  return (
    <>
      <div className={`navbar ${hideNavbar ? 'hidden' : ''}`}>
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
          <ul>
            <li onClick={(e) => handleNavigation(e, '/home')}>Home</li>
            <li onClick={(e) => handleNavigation(e, '/tv shows')}>TV Shows</li>
            <li onClick={(e) => handleNavigation(e, '/movie')}>Movies</li> 
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={Search_icon} alt="Search" className="icons" />
          <p>Children</p>
          <img src={bell_icon} alt="Notifications" className="icons" />
          <div className="navbar-profile">
            <img src={profile_img} alt="Profile" className="profile" />
            <img src={caret_icon} alt="Dropdown" />
            <div className="dropdown">
              <p>Sign out of Netflix</p>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
