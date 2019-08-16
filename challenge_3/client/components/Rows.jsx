import React from 'react';
import Frame from './Frame.jsx';

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowOne: [ 'I', null, 'I', null],
      rowTwo: [ null, null, null],
      rowThree: [ null, 'I'],
      rowFour: [null],
    }
  }

  render() {
    return (
      <div id="all-rows">
        <div className="rows" styles="flex-direction: row;" id="backRow">
          {this.state.rowFour.map((pin) => <Frame pin={pin} />)}
        </div>
        <div className="rows" styles="flex-direction: row;" id="backMid">
          {this.state.rowThree.map((pin) => <Frame pin={pin} />)}
        </div>
        <div className="rows" styles="flex-direction: row;" id="frontMid">
          {this.state.rowTwo.map((pin) => <Frame pin={pin} />)}
        </div>
        <div className="rows" styles="flex-direction: row;" id="frontRow">
          {this.state.rowOne.map((pin) => <Frame pin={pin} />)}
        </div>
      </div>
    )
  }
}

export default Rows;
