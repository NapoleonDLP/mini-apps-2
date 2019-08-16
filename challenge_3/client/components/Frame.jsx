import React from 'react'

function Frame ({ pin }) {

  if(pin === 'I') {
    return <div syles="width:100px;" id="frame">I</div>
  } else if (pin === null) {
    return <div id="noPin">.</div>
  }
};

export default Frame;
