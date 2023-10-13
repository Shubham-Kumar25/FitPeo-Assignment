import React from "react";
import DashboardPageHeader from "./DashboardPageHeader";
import DashboardPageCards from "./DashboardPageCards";
import OverviewChart from "./OverviewChart";
import CustomerChart from "./CustomerChart";

const DashboardPage = () => {
  return (
    <div>
      <DashboardPageHeader />
      <DashboardPageCards />
      <div className="flex gap-6">
        <OverviewChart />
        <CustomerChart />
      </div>
    </div>
  );
};

export default DashboardPage;
