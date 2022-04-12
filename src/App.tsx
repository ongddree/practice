import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  CodingApiPage,
  MemoPage,
  MemoReducerPage,
  MemoCustomInputPage,
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/codingApi" element={<CodingApiPage />} />
          <Route path="/memo" element={<MemoPage />} />
          <Route path="/memoReducer" element={<MemoReducerPage />} />
          <Route path="/memoCustom" element={<MemoCustomInputPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
