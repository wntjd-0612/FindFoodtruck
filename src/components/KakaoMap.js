import React, { useEffect, useState } from 'react';

const KakaoMap = () => {
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services'; // Replace YOUR_APP_KEY with your actual Kakao Maps API key
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Script load error.'));
        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      const kakao = window.kakao;
      if (!kakao || !kakao.maps) {
        console.error('Kakao maps API is not available.');
        setMapError(true);
        return;
      }

      try {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        
        // Your map initialization code here...
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(true);
      }
    };

    loadScript()
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error('Error loading Kakao Maps API:', error);
        setMapError(true);
      });

    return () => {
      const script = document.querySelector('script[src^="https://dapi.kakao.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {mapError ? (
        <div>Error loading the map. Please try again later.</div>
      ) : (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      )}
    </div>
  );
};

export default KakaoMap;
