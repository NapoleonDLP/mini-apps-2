import React from 'react';

function Event(props) {
  return (
    <div id='event'>
      {props.events.map((event, id) => 
        <div key={id}>{event.date}</div>
      )}
    </div>
  )
}

export default Event
