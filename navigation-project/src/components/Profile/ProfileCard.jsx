import React from 'react';
import Profile1 from '../../assets/images/profile1.jpg'
import Profile2 from '../../assets/images/profile2.jpg'

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img src={Profile1} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
