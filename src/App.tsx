import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Repositories from "./pages/Repositories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import RepositoryDetail from "./pages/RepositoryDetail";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/repositories/:id"element={<RepositoryDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;