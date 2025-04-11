import React from 'react';
import TradingViewChart from '../components/TradingViewChart';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', padding: '2rem' }}>
      <h1>📊 Welcome to Dashboard</h1>
      <p>Live charts will be shown here soon...</p>

      {/* Render the TradingView Chart */}
      <TradingViewChart />

      <h2>📩 WebSocket Messages:</h2>
      {/* Your existing WebSocket logic here */}
    </div>
  );
};

export default Dashboard;
