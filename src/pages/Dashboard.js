import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to the Dashboard</h2>
      <p style={styles.text}>Live charts will appear here soon...</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#111',
    height: '100vh',
    padding: '2rem',
    color: '#0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '16px',
    color: '#aaa',
  },
};

export default Dashboard;
