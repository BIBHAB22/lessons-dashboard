// src/App.js
import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Hero from './components/Hero';



const App = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <Hero />
      </main>
    </div>
  );
};

export default App;
