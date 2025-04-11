// src/components/TradingViewChart.js

import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "NSE:NIFTY", // Change this if needed
        interval: "5",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        container_id: "tradingview_container"
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      id="tradingview_container"
      ref={containerRef}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default TradingViewChart;
