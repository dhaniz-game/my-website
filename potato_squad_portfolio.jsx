/*
Project: Potato Squad Gaming Portfolio
Tech: React + React Router + Tailwind CSS

Structure:
/src
  /pages
    Players.jsx
    Achievements.jsx
    Clips.jsx
    FunnyMoments.jsx
  App.jsx
  index.jsx
  index.css
*/

// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// index.css (Tailwind setup)
@tailwind base;
@tailwind components;
@tailwind utilities;


// App.jsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Players from './pages/Players';
import Achievements from './pages/Achievements';
import Clips from './pages/Clips';
import FunnyMoments from './pages/FunnyMoments';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 bg-gray-800 flex space-x-6">
        <NavLink to="/players" className={({ isActive }) => isActive ? 'text-purple-400' : ''}>Players</NavLink>
        <NavLink to="/achievements" className={({ isActive }) => isActive ? 'text-purple-400' : ''}>Achievements</NavLink>
        <NavLink to="/clips" className={({ isActive }) => isActive ? 'text-purple-400' : ''}>Clips</NavLink>
        <NavLink to="/funny" className={({ isActive }) => isActive ? 'text-purple-400' : ''}>Funny Moments</NavLink>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/players" element={<Players />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/funny" element={<FunnyMoments />} />
          <Route path="*" element={<Players />} />
        </Routes>
      </main>
    </div>
  );
}


// pages/Players.jsx
import React from 'react';
export default function Players() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Team Potato Squad</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace with dynamic data or map through an array */}
        <li className="bg-gray-800 p-4 rounded-xl shadow-lg">Player One</li>
        <li className="bg-gray-800 p-4 rounded-xl shadow-lg">Player Two</li>
        <li className="bg-gray-800 p-4 rounded-xl shadow-lg">Player Three</li>
      </ul>
    </section>
  );
}


// pages/Achievements.jsx
import React from 'react';
export default function Achievements() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Achievements</h1>
      <ul className="space-y-3">
        <li className="bg-gray-800 p-4 rounded-lg shadow">Won BGMI Regional Finals - Jan 2025</li>
        <li className="bg-gray-800 p-4 rounded-lg shadow">Top 100 Solo Rank - Feb 2025</li>
        {/* Add more achievements here */}
      </ul>
    </section>
  );
}


// pages/Clips.jsx
import React from 'react';
export default function Clips() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Highlight Clips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Embed YouTube or video tags */}
        <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allowFullScreen />
        <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allowFullScreen />
      </div>
    </section>
  );
}


// pages/FunnyMoments.jsx
import React from 'react';
export default function FunnyMoments() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Funny Moments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <video controls className="w-full rounded-lg">
          <source src="/videos/funny1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className="w-full rounded-lg">
          <source src="/videos/funny2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
