import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';  // No need to import Router here
import RoutesData from './Routes/Routes';  
import './App.css';
import ScrollToTop from './Components/ScrollTop/ScrollTop';  

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}> 
        <ScrollToTop />
        <Routes>
          {RoutesData.map((data, i) => (
            <Route
              key={i}
              path={data.path}
              element={<data.element />}  
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
