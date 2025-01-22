import React from 'react'

const ATR = () => {
   return (
     <iframe
       src="https://www.framefxai.com/ATR/display"
       width="100%"
       height="500px"
       frameBorder="0" // Use camelCase for frameBorder
       allowFullScreen // Use camelCase for allowFullScreen
       title="ATR Chart" // Add a title for accessibility
     ></iframe>
   );
}

export default ATR