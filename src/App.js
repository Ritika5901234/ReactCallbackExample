import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      { name: 'Honda'},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      cars: [
        { name: newName }
      ]
    });
  }


  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <Car
          name={this.state.cars[0].name}
          click={this.switchNameHandler}
          />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
