import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
// import VideoPlayer from "../components/VideoPlayer";

const Stream = () => {
  const { streamKey } = useParams();

  if(!streamKey) return null;

  const hlsUrl = `http://localhost:8080/hls/${streamKey}.m3u8`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Live Stream: {streamKey}</h1>
      <ReactPlayer url={hlsUrl} controls playing width="80%" height="60vh" />
      
      {/* <VideoPlayer streamKey= {streamKey}/> */}
    </div>
  );
};

export default Stream;
