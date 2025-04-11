import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to backend

const CandleChart = () => {
  const chartContainerRef = useRef();
  const [candleSeries, setCandleSeries] = useState(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: { backgroundColor: '#fff', textColor: '#000' },
      grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
    });

    const series = chart.addCandlestickSeries();
    setCandleSeries(series);

    return () => chart.remove();
  }, []);

  useEffect(() => {
    if (!candleSeries) return;

    socket.on('candlestick', (data) => {
      console.log('📥 Received:', data);
      candleSeries.update(data);
    });

    return () => {
      socket.off('candlestick');
    };
  }, [candleSeries]);

  return <div ref={chartContainerRef} />;
};

export default CandleChart;
