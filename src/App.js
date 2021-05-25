import React from 'react';
import logo from './logo.svg';
import Hugo from './HugoImage.jpg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // ;
  componentDidMount(){
    const iframe = document.querySelector('iframe');
    // .contentDocument.body.querySelector('#cdt').style.display = 'none'
    if(iframe.contentDocument.body){
      console.log(typeof iframe.contentDocument,iframe.contentDocument.body.querySelector('#cdt'));  
    }
    
  }
  componentDidUpdate(){
    const iframe = document.querySelector('iframe');
    // .contentDocument.body.querySelector('#cdt').style.display = 'none'
    console.log(typeof iframe.contentDocument);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={Hugo} alt={"hugo"}/>
      </header>
      <section>
        <iframe width="700" height="360" src="https://w2.countingdownto.com/3625402" frameborder="0"></iframe>
      </section>
      <footer>
          <div>boa sorte para suas futuras aventuras! Vejo você por aí.</div>
      </footer>
    </div>
  );
  }
}

export default App;
