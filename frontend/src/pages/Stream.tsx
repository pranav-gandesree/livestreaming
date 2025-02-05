import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";

const Stream = () => {
  const { streamKey } = useParams();
  const [isAvailable, setIsAvailable] = useState(true);

  if (!streamKey) return null;

  // HLS URL from localhost or cloud (S3)
  const hlsUrl = `http://localhost:8080/hls/${streamKey}.m3u8`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Live Stream: {streamKey}</h1>

      {isAvailable ? (
        <ReactPlayer
          url={hlsUrl}
          controls
          playing
          width="80%"
          height="60vh"
          onError={() => setIsAvailable(false)} // Handle error if stream is unavailable
        />
      ) : (
        <p className="text-red-500 text-lg mt-4">Stream not available</p>
      )}
    </div>
  );
};

export default Stream;
