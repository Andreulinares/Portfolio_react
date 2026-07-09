import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import foto from './Img/prueba_card.jpg';

import Footer from './pages/Footer';
import Header from './pages/Header';

import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import Proyectos from './pages/Proyectos';
import Modelo3d from './pages/Modelo3d';

function App() {
  return (
    <>
      <Router basename='/Portfolio_react'>
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/modelo3d" element={<Modelo3d />} />
        </Routes>

        <Footer />
      </Router></>
  );
}

export default App;
