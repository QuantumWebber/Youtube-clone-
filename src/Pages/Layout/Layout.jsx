import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';  // Adjust the path as necessary
import Sidebar from '../../Components/Sidebar/Sidebar'; // Adjust the path as necessary
import { Outlet } from 'react-router-dom'; // This will render the nested route content

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* This will render the matched route */}
     
        <Outlet />
  
    </div>
  );
};

export default Layout;
