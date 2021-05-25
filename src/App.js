import React from 'react';
import logo from './logo.svg';
import Hugo from './HugoImage.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Hugo} alt={"hugo"}/>
      </header>
      <section>
        <iframe width="700" height="360" src="https://w2.countingdownto.com/3625402" frameborder="0"></iframe>
      </section>
      <footer>
          boa sorte para suas futuras aventuras! Vejo você por aí.
      </footer>
    </div>
  );
}

export default App;
