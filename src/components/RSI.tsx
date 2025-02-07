import React from 'react'

const RSI = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 80, // Adjust this if needed
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.framefxai.com/RSI/"
        title="RSI"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}

export default RSI