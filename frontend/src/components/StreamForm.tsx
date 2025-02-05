import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StreamForm = () => {
  const [streamKey, setStreamKey] = useState("");
  const [rtmpUrl] = useState("rtmp://localhost:1935/live");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (streamKey.trim()) {
      navigate(`/live/stream/${streamKey}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
          🎥  Live Stream
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 font-medium mb-1">
              Stream Key
            </label>
            <input
              type="text"
              placeholder="Enter Stream Key"
              value={streamKey}
              onChange={(e) => setStreamKey(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 font-medium mb-1">
              RTMP Server URL
            </label>
            <input
              type="text"
              value={rtmpUrl}
              className="w-full p-2 border border-gray-300 rounded bg-gray-800 cursor-not-allowed"
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            🚀 Start Stream
          </button>
        </form>
      </div>
    </div>
  );
};

export default StreamForm;
