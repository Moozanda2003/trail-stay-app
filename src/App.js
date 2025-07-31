import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon fix for React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});

const listings = [
  {
    id: 1,
    title: 'Lakeside Cabin Retreat',
    location: 'Lake Tahoe, CA',
    lat: 39.0968,
    lng: -120.0324,
    availableDates: [
      { start: '2025-08-15', end: '2025-08-20' },
      { start: '2025-09-01', end: '2025-09-05' }
    ],
    guests: 4,
    price: '$250/night',
    url: 'https://www.airbnb.com/rooms/1',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
  },
  {
    id: 2,
    title: 'Luxury Forest Lodge',
    location: 'Aspen, CO',
    lat: 39.1911,
    lng: -106.8175,
    availableDates: [
      { start: '2025-08-10', end: '2025-08-15' }
    ],
    guests: 2,
    price: '$450/night',
    url: 'https://www.booking.com/hotel/forestlodge',
    image: 'https://images.unsplash.com/photo-1600585154356-596af9009e82'
  }
];

export default function App() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const isAvailable = (availability) => {
    if (!checkIn || !checkOut) return true;
    const checkStart = new Date(checkIn);
    const checkEnd = new Date(checkOut);
    return availability.some(({ start, end }) => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      return startDate <= checkStart && endDate >= checkEnd;
    });
  };

  const filtered = listings.filter(
    (l) =>
      l.location.toLowerCase().includes(location.toLowerCase()) &&
      isAvailable(l.availableDates) &&
      l.guests >= guests
  );

  return (
    <div className="font-sans">
      <div className="bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Trail Stay</h1>
        <p className="text-xl mb-6">Find your next escape in nature</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded-full text-black"
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-4 py-2 rounded-full text-black"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="px-4 py-2 rounded-full text-black"
          />
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="px-4 py-2 rounded-full text-black"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((l) => (
          <div key={l.id} className="bg-white rounded-lg shadow p-4">
            <img src={l.image} alt={l.title} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{l.title}</h2>
            <p className="text-gray-600">{l.location}</p>
            <p className="text-green-600 font-bold">{l.price}</p>
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded">Book Now</a>
          </div>
        ))}
      </div>

      <div className="h-[400px] w-full px-4 pb-12">
        <MapContainer center={[39.5, -106.5]} zoom={6} scrollWheelZoom={false} className="h-full w-full rounded-lg">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filtered.map((l) => (
            <Marker key={l.id} position={[l.lat, l.lng]}>
              <Popup>
                <strong>{l.title}</strong><br />
                {l.location}<br />
                <a href={l.url} target="_blank" rel="noopener noreferrer">Book Now</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
