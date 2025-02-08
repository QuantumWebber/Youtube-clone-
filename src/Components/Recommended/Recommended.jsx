import React, { useEffect, useState } from 'react';
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import { API_KEY } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryId}&maxResults=8&key=${API_KEY}`;
      console.log('API Request URL:', url); // Log the URL for debugging

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the response for debugging

      if (!data.items) {
        throw new Error('No videos found in the response.');
      }

      setApiData(data.items);
      setError(null);
    } catch (error) {
      console.error('Error fetching recommended videos:', error);
      setError('Failed to load recommendations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div className="loading">Loading recommendations...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={fetchData}>Retry</button> {/* Add a retry button */}
      </div>
    );
  }

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        const videoId = item.id?.videoId;
        if (!videoId) {
          console.warn('Video ID is missing for item:', item);
          return null; // Skip rendering this item if videoId is missing
        }

        const thumbnail = item.snippet.thumbnails?.medium?.url || thumbnail1;
        const title = item.snippet.title || 'Untitled Video';
        const channel = item.snippet.channelTitle || 'Unknown Channel';
        const date = item.snippet.publishedAt
          ? new Date(item.snippet.publishedAt).toDateString()
          : 'Unknown date';

        return (
            <Link to={`/video/${categoryId}/${videoId}`} key={videoId} className="side-video-list">
            <img src={thumbnail} alt={title} />
            <div className="vid-info">
              <h4>{title}</h4>
              <p>{channel}</p>
              <span>{date}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;