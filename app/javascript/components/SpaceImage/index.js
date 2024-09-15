import React from 'react';

export default function SpaceImage({ image }) {
  return (
    <div>
      <h2>{image.title}</h2>
      <p>{new Date(image.publication_date).toLocaleDateString()}</p>
      {image.image_url && (
        <img src={image.image_url} alt={image.title} width="300" />
      )}
      <p dangerouslySetInnerHTML={{ __html: image.description }}></p>
      <a href={image.link} target="_blank" rel="noopener noreferrer">
        View Original
      </a>
    </div>
  );
}
