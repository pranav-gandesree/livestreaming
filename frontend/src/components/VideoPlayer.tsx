// import Hls from "hls.js";
// import { useEffect, useRef } from "react";

// const VideoPlayer = ({ streamKey }: { streamKey: string }) => {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const streamURL = `http://localhost:8080/hls/${streamKey}/index.m3u8`;

//     useEffect(() => {
//         if (videoRef.current) {
//             const hls = new Hls();
//             hls.loadSource(streamURL);
//             hls.attachMedia(videoRef.current);
//         }
//     }, [streamURL]);

//     return <video ref={videoRef} controls className="w-full" />;
// };

// export default VideoPlayer;












import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video.css';

function VideoPlayer ({ streamKey }: { streamKey: string }){
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      const videoPlayer = videojs(videoRef.current, {
        sources: [{
          src: `https://your-s3-bucket.s3.amazonaws.com/${streamKey}/index.m3u8`,
          type: 'application/x-mpegURL'
        }]
      });

      return () => {
        videoPlayer.dispose();
      };
    }
  }, [streamKey]);

  return (
    <div>
      <video 
        ref={videoRef} 
        className="video-js" 
        controls 
        preload="auto" 
        width="640" 
        height="360" 
      />
    </div>
  );
}

export default VideoPlayer;