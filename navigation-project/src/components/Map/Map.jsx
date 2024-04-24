import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ profile }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    
    mapRef.current = L.map('map').setView([profile.lat, profile.lng], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

    L.marker([profile.lat, profile.lng])
      .addTo(mapRef.current)
      .bindPopup(profile.name);
  }, [profile]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
