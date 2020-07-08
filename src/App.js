import React, {useState} from 'react';
import './App.css';
import countercontext from './countContext';
import {Parent} from './parent';

function App() {
  let count = useState(0)
  return (
    <countercontext.Provider value={count}>
      <div className="App">
        <Parent />
        
      </div>
    </countercontext.Provider>
  );
}

export default App;