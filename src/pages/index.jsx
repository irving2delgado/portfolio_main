// index.jsx (or App.jsx)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import '../styles/global.css'; // Import global styles

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <MainContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;