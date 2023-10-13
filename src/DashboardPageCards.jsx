import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faShoppingCart,
  faBalanceScale,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const DashboardPageCards = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <Card
          icon={
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-4xl text-green-500"
            />
          }
          title="Earning"
          value="$5,000"
          change={37.8}
          iconColor="green"
          backgroundColor="green"
        />
        <Card
          icon={
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-4xl text-indigo-500"
            />
          }
          title="Orders"
          value="500"
          change={8.2}
          iconColor="indigo"
          backgroundColor="indigo"
        />
        <Card
          icon={
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-4xl text-blue-500"
            />
          }
          title="Balance"
          value="$10,000"
          change={-5.3}
          iconColor="blue"
          backgroundColor="blue"
        />
        <Card
          icon={
            <FontAwesomeIcon
              icon={faChartBar}
              className="text-4xl text-red-500"
            />
          }
          title="Total Sales"
          value="$25,000"
          change={12.5}
          iconColor="red"
          backgroundColor="red"
        />
      </div>
    </div>
  );
};

export default DashboardPageCards;
