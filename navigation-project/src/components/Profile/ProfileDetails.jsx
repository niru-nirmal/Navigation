import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>{profile.address}</p>
    </div>
  );
};

export default ProfileDetails;
