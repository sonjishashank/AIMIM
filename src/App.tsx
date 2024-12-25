import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Leaders from './pages/Leaders';
import Works from './pages/Works';
import Volunteer from './pages/Volunteer';
import Media from './pages/Media';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/works" element={<Works />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/media" element={<Media />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;