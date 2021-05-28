import React from 'react';
import Hugo from './HugoImage.jpg';
import music from './music.mp3';
import './App.css';
import { Component } from 'react';

class App extends Component {

  render(){
    const audio = "https://cdn.sndup.net/32hb/src_music.mp3?token=0WbfVXFH8RGQBE9-EU_79b7DrbpiqiZDSdmgnqd8N7I&token_path=%2F32hb%2F&expires=1622205102";
  return (
    <div className="App">
      <header className="App-header">
        <div className="image"><img src={Hugo} alt={"hugo"}/></div>
      </header>
      <section>
      <iframe width="700" height="360" src="https://w2.countingdownto.com/3631319" frameborder="0"></iframe>
      </section>
      <footer>
          <div>boa sorte para suas futuras aventuras! Vejo você por aí.</div>
          <div> 
            <audio ref="audio_tag" src={audio} controls autoPlay loop/>
            
          </div>
      </footer>
    </div>
  );
  }
}

export default App;
