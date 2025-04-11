import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandleChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 400,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000',
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
    });

    const candleSeries = chart.addCandlestickSeries();

    candleSeries.setData([
      { time: '2024-04-08', open: 100, high: 110, low: 90, close: 105 },
      { time: '2024-04-09', open: 106, high: 115, low: 102, close: 110 },
      { time: '2024-04-10', open: 108, high: 120, low: 100, close: 107 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
};

export default CandleChart;
