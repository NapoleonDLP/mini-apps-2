import React from 'react';
import ReactDOM from 'react-dom';
import Frames from './components/Frames.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <Frames />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
