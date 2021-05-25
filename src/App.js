import React from 'react';
import Hugo from './HugoImage.jpg';
import music from './music.mp3';
import './App.css';
import { Component } from 'react';

class App extends Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="image"><img src={Hugo} alt={"hugo"}/></div>
      </header>
      <section>
        <iframe width="700" height="360" src="https://w2.countingdownto.com/3625402" frameborder="0" title="sdffefeff" ></iframe>
      </section>
      <footer>
          <div>boa sorte para suas futuras aventuras! Vejo você por aí.</div>
          <div> <audio ref="audio_tag" src={music} controls autoPlay loop/></div>
      </footer>
    </div>
  );
  }
}

export default App;
