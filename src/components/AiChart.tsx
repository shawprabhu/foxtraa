import React from 'react'

const AiChart = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: "100%", overflow: "hidden" }}>
      <iframe
        src="https://www.framefxai.com/ChartAnalyzer/"
        title="Chart Analyzer"
        style={{
          position: "fixed",
          top: 80,
          left: 0,
          width: "100%",
          height: "100vh",
          border: "none",
          margin: 30,
          padding: 0,
        }}
      ></iframe>
    </div>
  );
}

export default AiChart