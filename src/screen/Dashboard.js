import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate('/logout');
  // };

  return (
    <div className="admin-dashboard">
      <h1>Dashboard Page</h1>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
