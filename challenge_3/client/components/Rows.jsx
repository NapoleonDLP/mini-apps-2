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
        <div className="rows" id="backRow">
          {this.state.rowFour.map((pin, id) => <Frame key={id} pin={pin} />)}
        </div>
        <div className="rows" id="backMid">
          {this.state.rowThree.map((pin, id) => <Frame key={id} pin={pin} />)}
        </div>
        <div className="rows" id="frontMid">
          {this.state.rowTwo.map((pin, id) => <Frame key={id} pin={pin} />)}
        </div>
        <div className="rows" id="frontRow">
          {this.state.rowOne.map((pin, id) => <Frame key={id} pin={pin} />)}
        </div>
      </div>
    )
  }
}

export default Rows;
