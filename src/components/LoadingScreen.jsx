import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loading-screen ${!loading ? 'hide' : ''}`}>
      <div className="loading-text">
        {"Loading...".split("").map((letter, index) => (
          <h1
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;