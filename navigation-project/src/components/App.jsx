import React, { useState, useEffect } from 'react';
import ProfileCard from './Profile/ProfileCard';
import ProfileDetails from './Profile/ProfileDetails';
import Map from './Map/Map';
import '../styles/App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('mockProfiles.json');
        if (!response.ok) {
          throw new Error('Failed to fetch profiles');
        }
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfiles();
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>
      {selectedProfile && (
        <div className="map-container">
          <Map profile={selectedProfile} />
          <ProfileDetails profile={selectedProfile} />
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;
