import React from 'react';
//import './EventList.css';
import Event from '../Event/Event';

class EventList extends React.Component {
  render() {
    return (
      <div className="EventList">
        {
          this.props.events.map(eachevent => {
          return <Event eventOne={eachevent} />;
        })
      };
      </div>
    )
  }
}

export default EventList;
