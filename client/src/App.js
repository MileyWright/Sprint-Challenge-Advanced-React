import React from 'react';
import SearchResults from './Components/SearchResults';
import Navigation from './Components/Navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchResults />
    </div>
  );
}

export default App;
