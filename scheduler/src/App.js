import React, { Component } from 'react';
import CardAnimation from './components/CardAnimationComponent';
import './App.css';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="App">
          <CardAnimation />
        </div>

      </React.Fragment>
    );
  }
}

export default App;
