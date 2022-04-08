import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodingApiPage from './pages/CodingApiPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/codingApi" element={<CodingApiPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
