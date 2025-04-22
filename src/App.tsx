import React from 'react';
import './App.css';
import DiceRoller from './components/DiceRoller';
import CharacterGenerator from './components/CharacterGenerator';

function App() {
  return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo"/>*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://reactjs.org"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
        <h1>🧙‍♂️ Dungeon Crawl Classics Dice Roller</h1>
        <DiceRoller/>
        // Inside your JSX:
        <CharacterGenerator />
      </div>
  );
}

export default App;
