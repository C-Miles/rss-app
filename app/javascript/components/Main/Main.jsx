import React from 'react';
import SpaceImage from '../SpaceImage';

export default function Main({ spaceImages, loading, error }) {
  if (loading) {
    return <div>Loading space images...</div>;
  }

  if (error) {
    return <div>Error loading space images. Please try again later.</div>;
  }

  return (
    <div>
      <h1>NASA Space Images</h1>
      {spaceImages.map((image) => (
        <SpaceImage key={image.id} image={image} />
      ))}
    </div>
  );
}
