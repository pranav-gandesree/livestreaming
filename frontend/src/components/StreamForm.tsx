import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StreamForm = () => {
  const [streamKey, setStreamKey] = useState("");
  const [rtmpUrl] = useState("rtmp://localhost:1935/live");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (streamKey.trim()) {
        navigate(`/live/stream/${streamKey}`);
      }
    } catch (error) {
      console.error("Error starting stream:", error);
      alert("Failed to start stream");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Start Live Stream</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Enter Stream Key"
          value={streamKey}
          onChange={(e) => setStreamKey(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={rtmpUrl}
          className="p-2 border border-gray-300 rounded"
          disabled
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Start Stream
        </button>
      </form>
    </div>
  );
};

export default StreamForm;
