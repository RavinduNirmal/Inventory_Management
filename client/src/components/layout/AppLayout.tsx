// import React from 'react';
// import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from '../NavBar/NavBar';

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '60px' }}>
        <Sidebar />
        {/* <div style={{ flex: 1, padding: '20px' }}> */}
          {/* <Outlet /> */}
        </div>
      // </div>
    // </div>
  );
};

export default AppLayout;
