
import './App.css';
import { Footer } from "./myComponent/Footer";
import { About } from './myComponent/About';

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Loginpage from './myComponent/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
