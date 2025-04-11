import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      const widget = new window.TradingView.widget({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "1",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        container_id: "tradingview_container"
      });

      widget.onChartReady(() => {
        const chart = widget.activeChart();

        // Dummy Red Zone: CE TRAP
        chart.createShape(
          [
            { time: chart.timeScale().getVisibleRange().from + 60 * 3, price: 190 },
            { time: chart.timeScale().getVisibleRange().from + 60 * 6, price: 192 }
          ],
          {
            shape: "rectangle",
            text: "Sell Zone (CE Trap)",
            color: "#FF0000",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            borderColor: "#FF0000",
            lock: true
          }
        );

        // Dummy Green Zone: PE TRAP
        chart.createShape(
          [
            { time: chart.timeScale().getVisibleRange().from + 60 * 3, price: 175 },
            { time: chart.timeScale().getVisibleRange().from + 60 * 6, price: 177 }
          ],
          {
            shape: "rectangle",
            text: "Buy Zone (PE Trap)",
            color: "#00FF00",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            borderColor: "#00FF00",
            lock: true
          }
        );
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
