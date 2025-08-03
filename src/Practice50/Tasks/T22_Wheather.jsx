import React, { useState } from "react";

const T22_Wheather = () => {
  const [weather, setWeather] = useState("");

  const message = () => {
    switch (weather) {
      case "Sunny":
        return "It’s sunny today!";
      case "Rainy":
        return "Looks like rain!";
      case "Cloudy":
        return "Cloudy skies ahead.";
      default:
        return "Select the weather condition.";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Weather Status Today</h2>

      <select
        value={weather}
        name="wheather"
        onChange={(e) => setWeather(e.target.value)}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md">

        <option value="">Select Weather</option>
        <option value="Sunny">Sunny</option>
        <option value="Rainy">Rainy</option>
        <option value="Cloudy">Cloudy</option>
      </select>

      <div className="text-lg font-medium text-gray-700">{message()}</div>
    </div>
  );
};

export default T22_Wheather;
