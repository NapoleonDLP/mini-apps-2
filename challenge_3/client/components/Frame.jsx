import React from 'react'

function Frame ({ pin }) {

  if(pin === 'I') {
    return <div id="frame">I</div>
  } else if (pin === null) {
    return <div id="noPin">.</div>
  }
};

export default Frame;
