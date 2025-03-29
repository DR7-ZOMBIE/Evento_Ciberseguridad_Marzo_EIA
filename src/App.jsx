// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Bootcamp from './pages/Bootcamp';
import Charlas from './pages/Charlas';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import FsocietyAscii from './components/FsocietyAscii';
import Monologo from './pages/Monologo';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/charlas" element={<Charlas />} />
            <Route path="/registro" element={<RegistrationForm />} />
            <Route path="/mrrobot" element={<FsocietyAscii />} />
            <Route path="/monologo" element={<Monologo />}/>
            <Route path="/videos" element={<Videos />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
