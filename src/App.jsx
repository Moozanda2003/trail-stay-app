import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet icon paths for Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

const listings = [
  {
    id: 1,
    title: 'Lakeview Cabin',
    lat: 39.0968,
    lng: -120.0324,
    description: 'Rustic getaway near Lake Tahoe.',
    image: 'https://source.unsplash.com/400x300/?cabin,lake',
    link: 'https://www.airbnb.com/s/Lake-Tahoe--CA--United-States/homes'
  },
  {
    id: 2,
    title: 'Mountain Retreat',
    lat: 40.3428,
    lng: -105.6836,
    description: 'Lodge with access to Rocky Mountain trails.',
    image: 'https://source.unsplash.com/400x300/?mountain,cabin',
    link: 'https://www.expedia.com/Hotel-Search?destination=Rocky%20Mountain'
  },
  {
    id: 3,
    title: 'Forest Bungalow',
    lat: 37.8651,
    lng: -119.5383,
    description: 'Secluded bungalow in the forest.',
    image: 'https://source.unsplash.com/400x300/?forest,cabin',
    link: 'https://www.booking.com'
  }
];

export default function App() {
  return (
    <div className="p-4 space-y-10">
      {/* Search Bar */}
      <div className="bg-white p-4 shadow rounded flex flex-wrap gap-4 justify-between">
        <input type="text" placeholder="Location" className="border p-2 flex-1 rounded" />
        <input type="date" className="border p-2 rounded" />
        <input type="number" placeholder="Guests" className="border p-2 rounded w-24" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>

      {/* Listings */}
      <div className="grid md:grid-cols-3 gap-6">
        {listings.map(stay => (
          <div key={stay.id} className="bg-white shadow rounded overflow-hidden">
            <img src={stay.image} alt={stay.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{stay.title}</h2>
              <p className="text-sm text-gray-600">{stay.description}</p>
              <a href={stay.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 hover:underline">Book now</a>
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="h-[500px]">
        <MapContainer center={[39.5, -105]} zoom={6} className="h-full w-full z-0 rounded shadow">
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
