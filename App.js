import React, { useState } from 'react';
import './index.css';

const listings = [
  {
    id: 1,
    title: 'Lakeside Cabin',
    location: 'Lake Tahoe, CA',
    type: 'Family',
    activities: ['Hiking', 'Fishing'],
    price: '$250/night',
    url: 'https://www.airbnb.com/',
    lat: 39.0968,
    lng: -120.0324
  },
  {
    id: 2,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    type: 'Adults',
    activities: ['Hiking', 'Mountain Biking'],
    price: '$300/night',
    url: 'https://www.expedia.com/',
    lat: 39.1911,
    lng: -106.8175
  },
  {
    id: 3,
    title: 'Forest Lodge',
    location: 'Bend, OR',
    type: 'Family',
    activities: ['Fishing'],
    price: '$180/night',
    url: 'https://www.booking.com/',
    lat: 44.0582,
    lng: -121.3153
  }
];

function App() {
  const [typeFilter, setTypeFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState('');

  const filtered = listings.filter(
    (l) =>
      (!typeFilter || l.type === typeFilter) &&
      (!activityFilter || l.activities.includes(activityFilter))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Trail Stay</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <select onChange={(e) => setTypeFilter(e.target.value)} className="p-2 border rounded">
          <option value="">All Types</option>
          <option value="Adults">Adults Only</option>
          <option value="Family">Kids Welcome</option>
        </select>

        <select onChange={(e) => setActivityFilter(e.target.value)} className="p-2 border rounded">
          <option value="">All Activities</option>
          <option value="Hiking">Hiking</option>
          <option value="Mountain Biking">Mountain Biking</option>
          <option value="Fishing">Fishing</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((l) => (
          <div key={l.id} className="bg-white p-4 rounded shadow">
            <img src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(l.title)}`} alt={l.title} className="mb-4 w-full rounded" />
            <h2 className="text-xl font-bold">{l.title}</h2>
            <p>{l.location}</p>
            <p className="text-green-700 font-semibold">{l.price}</p>
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
