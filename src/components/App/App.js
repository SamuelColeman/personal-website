import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Articles from '../Articles/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Articles />
    </div>
  );
}

export default App;