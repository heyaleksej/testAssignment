import React from 'react';
import {replaceCharactersLinks} from './01_HTTPRequestHandling/episodes';
import './App.css';

function App() {


    return (
        <div className="App">
            <h1>Hello </h1>
            <button onClick={() => {replaceCharactersLinks()}}>Get first assignment log</button>
        </div>
    );
}

export default App;


