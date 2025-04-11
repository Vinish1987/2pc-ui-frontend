import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://twopc-ui-backend.onrender.com');

    ws.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    ws.onmessage = (event) => {
      console.log('📩 Message received:', event.data);
      setMessages(prev => [...prev, event.data]);
    };

    ws.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('🔌 WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{ color: 'lime', padding: '2rem', background: '#000', minHeight: '100vh' }}>
      <h2>📊 Welcome to Dashboard</h2>
      <p>Live charts will be shown here soon...</p>

      <div style={{ marginTop: '2rem' }}>
        <h4>📨 WebSocket Messages:</h4>
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx} style={{ fontFamily: 'monospace' }}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
