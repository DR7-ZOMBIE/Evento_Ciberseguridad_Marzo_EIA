// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bootcamp from './pages/Bootcamp';
import Charlas from './pages/Charlas';
import RegistrationForm from './components/RegistrationForm';
import FsocietyAscii from './components/FsocietyAscii';
import Monologo from './pages/Monologo';
import Videos from './components/Videos';
import Presentaciones from './components/Presentaciones'; // Asegúrate de crear este componente

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/charlas" element={<Charlas />} />
          <Route path="/registro" element={<RegistrationForm />} />
          <Route path="/mrrobot" element={<FsocietyAscii />} />
          <Route path="/monologo" element={<Monologo />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/presentaciones" element={<Presentaciones />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
