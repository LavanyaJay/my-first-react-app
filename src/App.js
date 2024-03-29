import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'

function App() {
  return (
    <div className="App">
      <main>
        <Title content = "My new title for App" />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur, Learn React! This is exciting!!!
        </a>
      </header>
    </div>
  );
}

export default App;
