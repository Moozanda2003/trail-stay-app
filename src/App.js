import React, { useState } from 'react';
import './index.css';

const listings = [
  {
    id: 1,
    title: 'Lakeside Cabin Retreat',
    location: 'Lake Tahoe, CA',
    type: 'Rustic',
    activities: ['Fishing', 'Hiking'],
    price: '$250/night',
    url: 'https://www.airbnb.com/rooms/1',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
  },
  {
    id: 2,
    title: 'Luxury Forest Lodge',
    location: 'Aspen, CO',
    type: 'Luxury',
    activities: ['Hiking', 'Mountain Biking'],
    price: '$450/night',
    url: 'https://www.booking.com/hotel/forestlodge',
    image: 'https://images.unsplash.com/photo-1600585154356-596af9009e82'
  },
  {
    id: 3,
    title: 'Modern Desert Dome',
    location: 'Joshua Tree, CA',
    type: 'Rustic',
    activities: ['Stargazing', 'Hiking'],
    price: '$180/night',
    url: 'https://www.airbnb.com/rooms/2',
    image: 'https://images.unsplash.com/photo-1596484552607-b6a3f60f2121'
  },
  {
    id: 4,
    title: 'Mountain Spa Chalet',
    location: 'Vail, CO',
    type: 'Luxury',
    activities: ['Hiking', 'Relaxation'],
    price: '$600/night',
    url: 'https://www.expedia.com/chalet',
    image: 'https://images.unsplash.com/photo-1551918120-eb7f6b6d4f68'
  }
];

function App() {
  const [search, setSearch] = useState('');

  const filtered = listings.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="hero">
        <h1>Trail Stay</h1>
        <p>Explore unique outdoor stays</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Where to?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="listings">
        {filtered.map((l) => (
          <div key={l.id} className="card">
            <img src={l.image} alt={l.title} />
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
