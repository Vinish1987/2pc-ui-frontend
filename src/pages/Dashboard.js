import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ws = new WebSocket('wss://twopc-ui-backend.onrender.com');

    ws.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    ws.onmessage = (event) => {
      console.log('📩 Message received:', event.data);
      setMessage(event.data);
    };

    ws.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('🔌 WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0f0',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'monospace'
    }}>
      <h2>📊 Welcome to Dashboard</h2>
      <p>Live charts will be shown here soon...</p>

      {message && (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #0f0' }}>
          <strong>Live Message:</strong> {message}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
