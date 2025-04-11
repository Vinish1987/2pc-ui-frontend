const express = require('express');
const http = require('http');
const { KiteTicker } = require('kiteconnect');
const socketIo = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

const apiKey = process.env.KITE_API_KEY;
const accessToken = process.env.KITE_ACCESS_TOKEN;

const ticker = new KiteTicker({
  api_key: apiKey,
  access_token: accessToken,
});

ticker.connect();

ticker.on('ticks', (ticks) => {
  console.log('Ticks received:', ticks);
  io.emit('ticks', ticks); // Send data to frontend
});

io.on('connection', (socket) => {
  console.log('Frontend connected');
  // Use any instrument token (example: 738561 → RELIANCE)
  ticker.subscribe([738561]);
});

server.listen(3001, () => {
  console.log('Kite Live Feed running on http://localhost:3001');
});
