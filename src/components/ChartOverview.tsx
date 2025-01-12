"use client"
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  // Properly type the ref as an HTMLDivElement
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the container exists before appending the script
    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:EURUSD|1M|USD"
            ],
            [
              "FX_IDC:JPYUSD|1M|USD"
            ],
            [
              "BITSTAMP:GBPUSD|1M|USD"
            ],
            [
              "PYTH:XAUUSD|1M|USD"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "headerFontSize": "medium",
          "gridLineColor": "rgba(0,0,0,0)",
          "backgroundColor": "rgba(0,0,0,1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "dateFormat": "dd MMM 'yy"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    
      <div className="tradingview-widget-container  " ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text "></span>
          </a>
        </div>
      </div>

  );
}

export default memo(TradingViewWidget);
