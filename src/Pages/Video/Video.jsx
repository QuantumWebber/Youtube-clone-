import React from 'react';
import { useParams } from 'react-router-dom';
import PlayVideo from '../../Components/playVideo/playVideo';
import Recommended from '../../Components/Recommended/Recommended';

const Video = () => {
  const { videoId, categoryId } = useParams();

  

  if (!videoId || !categoryId) {
    return <div>Video not found!</div>;
  }

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended  categoryId={categoryId}/>
    </div>
  );
};

export default Video;
