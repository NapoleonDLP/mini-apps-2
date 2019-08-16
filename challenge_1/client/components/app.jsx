import React from 'react';
import Events from './Events.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div id="app">
        <h1>Historical Events Finder</h1>
        <Events />
      </div>
    )
  }
}

export default App
