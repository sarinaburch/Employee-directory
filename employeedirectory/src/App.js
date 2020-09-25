import React from 'react';
import archie from './ArchieHead.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Archie Industries Employee Directory</h1>
        <img src={archie} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to continue
        </a>
      </header>
    </div>
  );
}

export default App;
