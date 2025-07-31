import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet's default icon import in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

const listings = [
  {
    id: 1,
    title: "Lakeview Cabin",
    lat: 39.0968,
    lng: -120.0324,
    description: "Rustic getaway near Lake Tahoe."
  },
  {
    id: 2,
    title: "Mountain Retreat",
    lat: 40.3428,
    lng: -105.6836,
    description: "Peaceful lodge by Rocky Mountain trails."
  }
];

export default function App() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Trail Stay</h1>
      <div className="h-[500px]">
        <MapContainer center={[39.5, -105]} zoom={6} className="h-full w-full z-0">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listings.map(stay => (
            <Marker key={stay.id} position={[stay.lat, stay.lng]}>
              <Popup>
                <strong>{stay.title}</strong><br />
                {stay.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
