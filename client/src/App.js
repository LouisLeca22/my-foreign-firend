import React from 'react';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context';
import './App.scss';

const App = () => {
  return (
    <ContextProvider>
      <Router>
      <Routes>
        <Route path='/'  element={<Join />} />
        <Route path='/chat' element={<Home />} />
        <Route path='*' element={<Join />} />
      </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
