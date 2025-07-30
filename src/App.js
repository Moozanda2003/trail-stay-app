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
  },
  {
    id: 5,
    title: 'Glamping Yurt in the Woods',
    location: 'Asheville, NC',
    type: 'Rustic',
    activities: ['Fishing', 'Hiking'],
    price: '$150/night',
    url: 'https://www.booking.com/yurt',
    image: 'https://images.unsplash.com/photo-1601933471629-c93cddba40af'
  },
  {
    id: 6,
    title: 'Ski-In/Ski-Out Luxury Lodge',
    location: 'Park City, UT',
    type: 'Luxury',
    activities: ['Skiing', 'Mountain Biking'],
    price: '$520/night',
    url: 'https://www.airbnb.com/rooms/3',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
  },
  {
    id: 7,
    title: 'Riverfront Tent Escape',
    location: 'Bend, OR',
    type: 'Rustic',
    activities: ['Fishing'],
    price: '$120/night',
    url: 'https://www.booking.com/tent',
    image: 'https://images.unsplash.com/photo-1551808512-d68471e189f4'
  },
  {
    id: 8,
    title: 'Lakeside Luxury Villa',
    location: 'Lake Placid, NY',
    type: 'Luxury',
    activities: ['Boating', 'Fishing'],
    price: '$700/night',
    url: 'https://www.expedia.com/villa',
    image: 'https://images.unsplash.com/photo-1582719478185-219c8f7e008c'
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
        <h1>Trail Stay</h1>
        <p>Explore unique outdoor stays</p>
        <div className="filters">
          <select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            <option value="Rustic">Rustic</option>
            <option value="Luxury">Luxury</option>
          </select>

          <select onChange={(e) => setActivityFilter(e.target.value)}>
            <option value="">All Activities</option>
            <option value="Hiking">Hiking</option>
            <option value="Fishing">Fishing</option>
            <option value="Mountain Biking">Mountain Biking</option>
            <option value="Boating">Boating</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Stargazing">Stargazing</option>
            <option value="Skiing">Skiing</option>
          </select>
        </div>
      </div>

      <div className="listings">
        {filtered.map((l) => (
          <div key={l.id} className="card">
            <img src={`${l.image}?auto=format&fit=crop&w=800&q=60`} alt={l.title} />
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

