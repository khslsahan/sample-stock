import React from 'react';
import './App.css'; 
import First from './component/Start'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Landing from './component/pages/landing';
import LandingSectionTwo from './component/pages/landing/LandingSectionTwo';
import AboutUs from './component/pages/about-us';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <Header/>
        <Routes>
          <Route  path="/" element={ <First/>} />
          <Route  path="/aboutUs" element={<AboutUs/>} />
          <Route  path="/contact" element={<AboutUs/>} />
          <Route  path="/landing" element={<Landing/>} />
          <Route  path="/car" element={<LandingSectionTwo/>} />
          <Route  path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  );
}


export default App;
