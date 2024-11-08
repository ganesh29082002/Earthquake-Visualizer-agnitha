import React, { useEffect, useState } from "react";
import axios from "axios";
import EarthquakeMap from "./EarthquakeMap";

const FetchEarthquakes = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakes = async () => {
        console.log("fetchEarthquakes")
      try {
        const response = await axios.get(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        setEarthquakes(response.data.features);
        console.log(response.data.features , "response.data.features")
      } catch (err) {
        console.log(err.message , "error")
        setError("Could not fetch earthquake data. Please try again later.");
      }
    };

    fetchEarthquakes();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Earthquake Visualizer</h1>
      {error && <p className="text-red-500">{error}</p>}
      <EarthquakeMap earthquakes={earthquakes} />
    </div>
  );
};

export default FetchEarthquakes;
