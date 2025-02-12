
"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [symbol, setSymbol] = useState("");
  const [interval, setInterval] = useState("");
  const [chartCount, setChartCount] = useState(2);
  const [theme, setTheme] = useState("dark");
  const searchParams = useSearchParams();
  const charts = Number(searchParams.get("charts")) || 0;
  const chartSymbol = searchParams.get("symbol") || "";
  const chartInterval = searchParams.get("interval") || "";
  const queryTheme = searchParams.get("theme") || theme;

  useEffect(() => {
    if (!containerRef.current || !chartSymbol || !chartInterval) return;

    containerRef.current.innerHTML = "";

    const gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(charts))}, 1fr)`;
    const gridTemplateRows = `repeat(${Math.ceil(charts / Math.ceil(Math.sqrt(charts)))}, 1fr)`;

    containerRef.current.style.display = "grid";
    containerRef.current.style.gridTemplateColumns = gridTemplateColumns;
    containerRef.current.style.gridTemplateRows = gridTemplateRows;
    containerRef.current.style.gap = "10px";
    containerRef.current.style.width = "100%";
    containerRef.current.style.height = "100vh";

    for (let i = 0; i < charts; i++) {
      const chartDiv = document.createElement("div");
      chartDiv.style.width = "100%";
      chartDiv.style.height = "100%";
      containerRef.current.appendChild(chartDiv);

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: chartSymbol,
        interval: chartInterval,
        timezone: "Etc/UTC",
        theme: queryTheme,
        style: "1",
        locale: "en",
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com",
      });

      chartDiv.appendChild(script);
    }
  }, [charts, chartSymbol, chartInterval, queryTheme ]);

  const openCharts = () => {
    if (!symbol || !interval) return;
    const url = `${window.location.origin}/multiple-charts?charts=${chartCount}&symbol=${symbol}&interval=${interval}&theme=${theme}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px",
        borderRadius: "8px",
        height: "100vh",
      }}
    >
      {charts === 0 && (
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: "400px",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
          }}
        >
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            style={{
              padding: "8px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Symbol</option>
            <option value="OANDA:XAUUSD">Gold (XAUUSD)</option>
            <option value="OANDA:XAGUSD">Silver (XAGUSD)</option>
            <option value="CAPITALCOM:DXY">Dollar Index (DXY)</option>
            <option value="TVC:USOIL">Crude Oil (USOIL)</option>
            <option value="coinbase:BTCUSD">Bitcoin (BTCUSD)</option>
            <option value="OANDA:EURUSD">Euro / US Dollar (EURUSD)</option>
            <option value="OANDA:GBPUSD">
              British Pound / US Dollar (GBPUSD)
            </option>
            <option value="OANDA:AUDUSD">
              Australian Dollar / US Dollar (AUDUSD)
            </option>
            <option value="OANDA:USDCHF">
              US Dollar / Swiss Franc (USDCHF)
            </option>
            <option value="OANDA:USDJPY">
              US Dollar / Japanese Yen (USDJPY)
            </option>
            <option value="FX:USDCAD">
              US Dollar / Canadian Dollar (USDCAD)
            </option>
            <option value="FX:GBPCAD">
              British Pound / Canadian Dollar (GBPCAD)
            </option>
            <option value="FX:GBPJPY">
              British Pound / Japanese Yen (GBPJPY)
            </option>
            <option value="FX:EURJPY">Euro / Japanese Yen (EURJPY)</option>
            <option value="FX:EURCHF">Euro / Swiss Franc (EURCHF)</option>
          </select>
          <select
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            style={{
              padding: "8px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Interval</option>
            <option value="5">5 min</option>
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="60">1 hr</option>
            <option value="240">4 hr</option>
            <option value="D">1 day</option>
          </select>
          <select
            value={chartCount}
            onChange={(e) => setChartCount(Number(e.target.value))}
            style={{
              padding: "8px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "4px",
            }}
          >
            <option value="1">1 Chart</option>
            <option value="2">2 Charts</option>
            <option value="4">4 Charts</option>
            <option value="6">6 Charts</option>
            <option value="8">8 Charts</option>
            <option value="9">9 Charts</option>
          </select>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: "8px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "4px",
            }} 
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <button
            onClick={openCharts}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Generate
          </button>
        </div>
      )}
      <div className="tradingview-widget-container" ref={containerRef}></div>
    </div>
  );
};

export default TradingViewWidget;

