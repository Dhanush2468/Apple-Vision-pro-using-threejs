import { Html } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading (for demonstration)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => Math.min(prevProgress + 5, 100)); 
    }, 500); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <Html>
      <style>{`
        .loading-container {
          position: absolute;
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          display: flex; 
          flex-direction: column; /* Arrange elements vertically */
          justify-content: center; 
          align-items: center;
        }

        .loading-percentage {
          font-size: 24px;
          font-weight: bold;
          color: white;
        }

        .loading-icon {
          width: 100px; /* Adjust size as needed */
          height: auto; /* Maintain aspect ratio */
          margin-bottom: 10px; /* Adjust spacing */
        }
      `}</style>
      <div className="loading-container"> 
        <span className="loading-percentage">{loadingProgress}%</span>
      </div>
    </Html>
  );
};

export default Loader;