import React from "react";
import Sidebar from "./Sidebar";
import DashboardPage from "./DashboardPage";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-full p-4 ml-64 bg-gray-100">
        <DashboardPage />
      </div>
    </div>
  );
};

export default App;
