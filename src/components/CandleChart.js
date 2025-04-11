import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandleChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 400,
    });

    const candleSeries = chart.addCandlestickSeries();

    candleSeries.setData([
      { time: '2022-04-01', open: 100, high: 110, low: 90, close: 105 },
      { time: '2022-04-02', open: 106, high: 115, low: 95, close: 100 },
      { time: '2022-04-03', open: 101, high: 120, low: 100, close: 115 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
};

export default CandleChart;
