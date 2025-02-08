import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'

import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import moment from "moment";



const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData,setChannelData]=useState(null)
  const [comments, setComments] = useState([]);

  const fetchVideoData = async (videoId) => {
    try {
      const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videoDetailsUrl);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const fetchChannelData = async () => {
    if (!apiData) return;
    try {
      const channelDetailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(channelDetailsUrl);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setChannelData(data.items[0]);
      }
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=5`;
      const response = await fetch(commentsUrl);
      const data = await response.json();
      if (data.items) {
        setComments(data.items);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoData(videoId);
      fetchComments();
    }
  }, [videoId]); // Added dependencies

  useEffect(() => {
    fetchChannelData();
  }, [apiData]); // Fixed infinite loop
  
  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : "No Title"}</h3>

      <div className="play-video-info">
        <p>{apiData ? apiData.statistics.viewCount : "16K"} &bull; {apiData?.snippet?.publishedAt ? moment(apiData.snippet.publishedAt).fromNow() : "Unknown Date"}</p>
        <div>
          <span>
            <img src={like} alt="Like" /> {apiData?apiData.statistics.likeCount:155}
          </span>
          <span>
            <img src={dislike} alt="Dislike" /> 
          </span>
          <span>
            <img src={share} alt="Share" /> Share
          </span>
          <span>
            <img src={save} alt="Save" /> Save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="Publisher" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>
            {channelData ? `${channelData.statistics.subscriberCount} Subscribers` : 'Loading Subscribers...'}
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="description">
        <p>{apiData?apiData.snippet.description.slice(0,350):""}</p>
        <hr />
        <h4>{apiData?apiData.statistics.commentCount:0}Comments</h4>

        {comments.length > 0 ? (
          comments.map((comment) => {
            const { snippet } = comment.snippet.topLevelComment;
            return (
              <div className="comments" key={comment.id}>
                <img src={snippet.authorProfileImageUrl || user_profile} alt="User Profile" />
                <div>
                  <h3>
                    {snippet.authorDisplayName} <span>{moment(snippet.publishedAt).fromNow()}</span>
                  </h3>
                  <p>{snippet.textDisplay}</p>
                  <div className="comment-action">
                    <img src={like} alt="Like" />
                    <span>{snippet.likeCount}</span>
                    <img src={dislike} alt="Dislike" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default PlayVideo;