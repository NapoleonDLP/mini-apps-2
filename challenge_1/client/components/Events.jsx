import React from 'react';
import ReactPaginate from 'react-paginate';
import Event from './Event.jsx';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then((events) => events.json())
      .then((events) => this.setState({ events: events }))
      .catch((error) => console.log('The following error occured: ', error))
  }

  render() {
    return (
      <div id="events">
        <Event events={this.state.events} />
        <ReactPaginate
        previousLable={'previous'}
        nextLabel={'next'}
        breakLable={'...'}
        breakClassName={'break-me'}
        pageCount={this.state.events.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        />
      </div>
    )
  }
};

export default Events;
