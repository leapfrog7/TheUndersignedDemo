
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Home } from './components/Home';
import {About} from './components/About';
import CghsRates from './pages/CghsRates';
import PayMatrix from './pages/PayMatrix';
 

function App() {
  return (
    <div className="mx-auto">
        <Header />
        
        <Routes>

          <Route path='/' element={<Home/>}> </Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='/cghsrates' element={<CghsRates/>}></Route>
          <Route path = '/paymatrix' element={<PayMatrix/>}></Route>
        </Routes>
        
        <Footer />
    </div>
  )
}

export default App;
