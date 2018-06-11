import React from 'react';

class AddEvent extends React.Component {
  constructor() {
    super();
  }

  saveEvent(input) {

  }

  render() {
    return (
      <div>
        <div className="inputEvent">
          <input type="text" placeholder="Add Event" />

        </div>
      </div>
    )
  }
}

export default AddEvent;
