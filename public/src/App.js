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
  },
  {
    id: 2,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    type: 'Adults',
    activities: ['Hiking', 'Mountain Biking'],
    price: '$300/night',
    url: 'https://www.expedia.com/',
  },
  {
    id: 3,
    title: 'Forest Lodge',
    location: 'Bend, OR',
    type: 'Family',
    activities: ['Fishing'],
    price: '$180/night',
    url: 'https://www.booking.com/',
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
    <div className="app">
      <div className="hero">
        <div className="overlay">
          <h1>Trail Stay</h1>
          <p>Find your next adventure</p>
          <div className="filters">
            <select onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">All Types</option>
              <option value="Adults">Adults Only</option>
              <option value="Family">Kids Welcome</option>
            </select>

            <select onChange={(e) => setActivityFilter(e.target.value)}>
              <option value="">All Activities</option>
              <option value="Hiking">Hiking</option>
              <option value="Mountain Biking">Mountain Biking</option>
              <option value="Fishing">Fishing</option>
            </select>
          </div>
        </div>
      </div>

      <div className="listings">
        {filtered.map((l) => (
          <div key={l.id} className="card">
            <img src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(l.title)}`} alt={l.title} />
            <h2>{l.title}</h2>
            <p>{l.location}</p>
            <p className="price">{l.price}</p>
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="btn">Book Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
