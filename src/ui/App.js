import React, {Component} from 'react';

import _ from 'lodash';
import './App.sass';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  _onClick = () => { 
    
  };

  render() {
      return (
        <div className="App">
          <h1 className="App-title">First practising with React.js</h1>
        </div>
      );
  }
}

export default App;


React.render((
        <App />
), document.getElementById('App'));
