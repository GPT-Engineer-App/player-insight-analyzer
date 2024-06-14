import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PlayerProfiling from "./pages/PlayerProfiling.jsx";
import PerformanceAnalytics from "./pages/PerformanceAnalytics.jsx";
import VideoAnalysis from "./pages/VideoAnalysis.jsx";
import DataCollection from "./pages/DataCollection.jsx";
import UserExperience from "./pages/UserExperience.jsx";
import SecurityPrivacy from "./pages/SecurityPrivacy.jsx";
import Integration from "./pages/Integration.jsx";
import ScalabilityMaintenance from "./pages/ScalabilityMaintenance.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/player-profiling" element={<PlayerProfiling />} />
        <Route exact path="/performance-analytics" element={<PerformanceAnalytics />} />
        <Route exact path="/video-analysis" element={<VideoAnalysis />} />
        <Route exact path="/data-collection" element={<DataCollection />} />
        <Route exact path="/user-experience" element={<UserExperience />} />
        <Route exact path="/security-privacy" element={<SecurityPrivacy />} />
        <Route exact path="/integration" element={<Integration />} />
        <Route exact path="/scalability-maintenance" element={<ScalabilityMaintenance />} />
      </Routes>
    </Router>
  );
}

export default App;