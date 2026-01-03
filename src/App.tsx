import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Page imports
import Dashboard from "./pages/Dashboard";
import InviteMembers from "./pages/InviteMembers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Roles from "./pages/Roles";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex bg-gray-50 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invite" element={<InviteMembers />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/roles" element={<Roles />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
