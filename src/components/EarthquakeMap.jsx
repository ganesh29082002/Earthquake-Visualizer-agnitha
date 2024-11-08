import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const earthquakeIcon = new L.Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});



const EarthquakeMap = ({ earthquakes }) => {
    console.log("EarthquakeMap components")
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      className="w-full h-[600px] rounded-md shadow-lg"
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {earthquakes.map((quake) => {
        console.log(quake , "quake")
        const { id, properties, geometry } = quake;
        const [longitude, latitude] = geometry.coordinates;

        return (
          <Marker
            key={id}
            position={[latitude, longitude]}
            icon={earthquakeIcon}
          >
            <Popup>
              <div className="text-sm">
                <p><strong>Location:</strong> {properties.place}</p>
                <p><strong>Magnitude:</strong> {properties.mag}</p>
                <p><strong>Depth:</strong> {geometry.coordinates[2]} km</p>
                <p>
                  <strong>Time:</strong>{" "}
                  {new Date(properties.time).toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EarthquakeMap;
