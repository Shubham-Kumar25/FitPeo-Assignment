import React from "react";
import { IconContext } from "react-icons";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ icon, title, value, change, iconColor, backgroundColor }) => {
  const isIncrease = change >= 0;

  return (
    <div className="w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4 justify-evenly">
          <div
            className={`text-${iconColor}-400 flex items-center shadow-lg justify-center rounded-full w-16 h-16 bg-${backgroundColor}-500 p-2`}
          >
            {icon}
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className={`text-${iconColor}-400 font-semibold mb-1`}>
              {title}
            </p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center">
              <i
                className={`mr-2 text-sm bg-${iconColor}-200 rounded-full p-1`}
              >
                <IconContext.Provider
                  value={{ color: isIncrease ? "green" : "red", size: "1rem" }}
                >
                  {isIncrease ? <FaArrowUp /> : <FaArrowDown />}
                </IconContext.Provider>
              </i>
              <p className={isIncrease ? "text-green-500" : "text-red-500"}>
                {Math.abs(change)}% this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
