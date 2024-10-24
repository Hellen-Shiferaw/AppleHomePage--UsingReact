import React, { useState, useEffect } from "react";
import "../YoutubeVideos.js/YoutubeVideos.css";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDiBFL2dcnhlfvQsBWxnIq6qiRKJyySdTQ")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {videos?.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      {/* to access Photo */}
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>

                  {/* to access title */}
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>

                    {/* to access discription */}
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;

