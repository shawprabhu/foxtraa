import React from 'react'

const AiChart = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, // Adjust this if needed
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.framefxai.com/ChartAnalyzer/"
        title="Chart Analyzer"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}

export default AiChart