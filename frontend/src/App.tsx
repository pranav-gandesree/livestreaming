import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stream from "./pages/Stream";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="live/stream/:streamKey" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
