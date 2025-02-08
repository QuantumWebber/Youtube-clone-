import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
       
        <img className="menu-icon" src={menu_icon} 
        alt="Menu Icon" 
        onClick={toggleSidebar}/>
       <Link to='/home'><img className="logo" src={logo} alt="YouTube Logo" /></Link>

      </div>

      {/* Middle Section */}
      <div className="nav-middle">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <img src={search_icon}  className='searching'alt="Search Icon" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <img className="icon" src={upload_icon} alt="Upload" />
        <img className="icon" src={more_icon} alt="More Options" />
        <img className="icon" src={notification_icon} alt="Notifications" />
        <img className="profile-icon" src={profile_icon} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
