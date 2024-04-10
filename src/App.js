import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoojaList from './PoojaList';
import PoojaDetails from './PoojaDetails';
import poojaData from './PoojaData';
import EditPooja from './EditPooja';

 
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PoojaList poojas={poojaData} />} />
          <Route path="/pooja/:poojaName" element={<PoojaDetails poojas={poojaData} />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
