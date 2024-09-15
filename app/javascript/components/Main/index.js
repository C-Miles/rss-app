import React, { useEffect, useState } from 'react';
import Main from './Main';
import axios from 'axios';

export default function MainContainer() {
  const [spaceImages, setSpaceImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSpaceImages();
  }, []);

  const fetchSpaceImages = async () => {
    try {
      const response = await axios.get('/space_images.json');
      setSpaceImages(response.data);
    } catch (err) {
      console.error('Error fetching space images:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const props = {
    spaceImages,
    loading,
    error,
  };

  return <Main {...props} />;
}
