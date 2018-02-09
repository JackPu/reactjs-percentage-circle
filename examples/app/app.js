import React, { Component } from 'react';
import { render } from 'react-dom';
import Contents from './components/contents';
class App extends Component {
  render() {
    return (
      <div>
        <Contents></Contents>
      </div> 
    );
  }
}

export default App;
