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







