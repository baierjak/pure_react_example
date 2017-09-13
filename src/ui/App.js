import React, {Component} from 'react';

import _ from 'lodash';
import './App.sass';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  componentWillMount() {
    console.log("mountuju se");
  }

  componentDidMount() {
    
  }

  _onClick = () => { 
    
  };

  render() {
      return (
        <div className="App">
          <TitleComponent color={this.state.color} name="DUmmyComponenta" />
        </div>
      );
  }
}

export default App;


class TitleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <h1 className="App-title" style={{color: this.state.color}}>First practising jlerg with React.js</h1>
    );
  }
}


React.render((
        <App />
), document.getElementById('App'));
