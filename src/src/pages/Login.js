// src/Login.js
import { useState } from 'react';

export default function Login() {
  const [id, setId] = useState('9016388002');
  const [password, setPassword] = useState('1234');

  const handleLogin = () => {
    if (id === '9016388002' && password === '1234') {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-[#121212] p-8 rounded-xl w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">2PC Login</h2>

        <label className="block mb-2 text-sm text-gray-400">User ID</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-[#1e1e1e] text-white border border-gray-700 rounded-md focus:outline-none"
        />

        <label className="block mb-2 text-sm text-gray-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 bg-[#1e1e1e] text-white border border-gray-700 rounded-md focus:outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}
