// import React, { useState, useEffect, useRef } from "react";

// const DynamicTradingViewWidgets = () => {
//   const [symbol, setSymbol] = useState("OANDA:XAUUSD");
//   const [interval, setInterval] = useState("5");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const widgetContainerRef = useRef(null); // Ref for the widget container

//   // Function to create a TradingView widget
//   const createWidget = (symbol, interval, containerId) => {
//     if (window.TradingView) {
//       new window.TradingView.widget({
//         container_id: containerId,
//         width: "100%",
//         height: "100%",
//         symbol: symbol,
//         interval: interval,
//         timezone: "Etc/UTC",
//         theme: "dark",
//         style: "1",
//         locale: "en",
//         toolbar_bg: "#f1f3f6",
//         enable_publishing: false,
//         allow_symbol_change: true,
//         hide_top_toolbar: false,
//         hide_side_toolbar: false,
//         save_image: false,
//         details: false,
//         show_popup_button: true,
//         popup_width: "1000",
//         popup_height: "650",
//         hide_volume: true,
//         studies: [], // Default studies/indicators
//         overrides: {}, // Any chart customization
//         saved_data: true, // Enable saving user data
//         load_saved_settings: true, // Load previously saved settings
//       });
//     }
//   };

//   // Update all widgets with the selected symbol and interval
//   const updateWidgets = () => {
//     for (let i = 1; i <= 6; i++) {
//       createWidget(symbol, interval, `widget${i}`);
//     }
//     // Show only the first widget initially
//     const widgets = widgetContainerRef.current.querySelectorAll(
//       ".tradingview-widget-container"
//     );
//     widgets.forEach((widget, index) => {
//       widget.style.visibility = index === 0 ? "visible" : "hidden";
//     });
//   };

//   // Toggle fullscreen mode
//   const toggleFullscreen = () => {
//     if (widgetContainerRef.current) {
//       if (!document.fullscreenElement) {
//         widgetContainerRef.current.requestFullscreen().then(() => {
//           setIsFullscreen(true);
//           adjustWidgetSizes();
//           const widgets = widgetContainerRef.current.querySelectorAll(
//             ".tradingview-widget-container"
//           );
//           widgets.forEach((widget) => {
//             widget.style.visibility = "visible";
//           });
//         });
//       } else {
//         document.exitFullscreen();
//       }
//     }
//   };

//   // Adjust widget sizes for fullscreen
//   const adjustWidgetSizes = () => {
//     const widgets = widgetContainerRef.current.querySelectorAll(
//       ".tradingview-widget-container"
//     );
//     const gridContainer = widgetContainerRef.current;

//     const rows = 2;
//     const cols = 3;
//     const widgetWidth = gridContainer.clientWidth / cols;
//     const widgetHeight = gridContainer.clientHeight / rows;

//     widgets.forEach((widget) => {
//       widget.style.width = `${widgetWidth}px`;
//       widget.style.height = `${widgetHeight}px`;
//     });
//   };

//   // Handle fullscreen change
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//       if (!document.fullscreenElement) {
//         const widgets = widgetContainerRef.current.querySelectorAll(
//           ".tradingview-widget-container"
//         );
//         widgets.forEach((widget, index) => {
//           widget.style.visibility = index === 0 ? "visible" : "hidden";
//         });
//       }
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   // Load TradingView script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/tv.js";
//     script.async = true;
//     script.onload = () => {
//       // Initialize widgets after the script loads
//       updateWidgets();
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <label htmlFor="symbol-select">Choose a symbol:</label>
//         <select
//           id="symbol-select"
//           value={symbol}
//           onChange={(e) => setSymbol(e.target.value)}
//         >
//           <option value="OANDA:XAUUSD">Gold (XAUUSD)</option>
//           <option value="OANDA:XAGUSD">Silver (XAGUSD)</option>
//           <option value="CAPITALCOM:DXY">Dollar Index (DXY)</option>
//           <option value="TVC:USOIL">Crude Oil (USOIL)</option>
//           <option value="coinbase:BTCUSD">Bitcoin (BTCUSD)</option>
//           <option value="OANDA:EURUSD">Euro / US Dollar (EURUSD)</option>
//           <option value="OANDA:GBPUSD">
//             British Pound / US Dollar (GBPUSD)
//           </option>
//           <option value="OANDA:AUDUSD">
//             Australian Dollar / US Dollar (AUDUSD)
//           </option>
//           <option value="OANDA:USDCHF">US Dollar / Swiss Franc (USDCHF)</option>
//           <option value="OANDA:USDJPY">
//             US Dollar / Japanese Yen (USDJPY)
//           </option>
//           <option value="FX:USDCAD">
//             US Dollar / Canadian Dollar (USDCAD)
//           </option>
//           <option value="FX:GBPCAD">
//             British Pound / Canadian Dollar (GBPCAD)
//           </option>
//           <option value="FX:GBPJPY">
//             British Pound / Japanese Yen (GBPJPY)
//           </option>
//           <option value="FX:EURJPY">Euro / Japanese Yen (EURJPY)</option>
//           <option value="FX:EURCHF">Euro / Swiss Franc (EURCHF)</option>
//         </select>

//         <label htmlFor="interval-select">Choose an interval:</label>
//         <select
//           id="interval-select"
//           value={interval}
//           onChange={(e) => setInterval(e.target.value)}
//         >
//           <option value="5">5 Minutes</option>
//           <option value="15">15 Minutes</option>
//           <option value="30">30 Minutes</option>
//           <option value="60">1 Hour</option>
//           <option value="240">4 Hours</option>
//           <option value="D">1 Day</option>
//         </select>

//         <button className="button-3d" onClick={updateWidgets}>
//           Confirm
//         </button>
//         <button
//           className="button-3d six-chart-button"
//           onClick={toggleFullscreen}
//         >
//           Six Chart View
//         </button>
//         <button
//           className="button-3d refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Refresh
//         </button>
//       </div>

//       {/* Widget Containers */}
//       <div
//         id="widgets"
//         ref={widgetContainerRef}
//         className={`widget-container ${isFullscreen ? "fullscreen" : ""}`}
//       >
//         {[...Array(6)].map((_, index) => (
//           <div
//             key={index}
//             className="tradingview-widget-container"
//             id={`widget${index + 1}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DynamicTradingViewWidgets;
