/* The purpose of the <Event /> component is to
represent how an Event (a show/festival) in RaveApp
will be formatted and styled.
For now, we'll hard code a single event listing.
*/

import React from 'react';
import './Event.css';

const event = {
  imageSrc: 'https://images.pexels.com/photos/2143/lights-party-dancing-music.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350',
  name: 'Ultra Music Festival',
  address: 'Bayfront Park',
  city: 'Miami',
  state: 'FL',
  country: 'USA',
  zipCode: '33132',
  category: 'Festival',
  genre: 'EDM',
  dates: 'March 23, 2018 - March 25, 2018',
  priceRange: '$300-$2,000 USD',
  tickets: 'https://ultramusicfestival.com/tickets/miami/',
  merch: 'https://www.ultramerchandise.com/' //this should eventually be an anchor tag to a relative path
};

class Event extends React.Component {

  render() {
    return (
      <div className="Event">
        <div className="image-container responsive">

          <div className="gallery">
            <img src={event.imageSrc} width="100" height="100" alt="The main stage at a music festival"/>
          </div>

          <div className="description">
            <h2>{event.name}</h2>
            <div className="Event-information">
              <div className="Event-address">
                <p>{event.address}</p>
                <p>{`${event.city}, ${event.state} ${event.zipCode}`}</p>
                <p>{event.country}</p>
              </div>
              <div className="Event-category">
                <h4>{event.category.toUpperCase()}</h4>
              </div>
              <div className="Event-dates">
                <h3>{`Dates: ${event.dates}`}</h3>
              </div>
              <div className="Event-tickets">
                <p>{`PriceRange: ${event.priceRange}`}</p>
                <a href={event.tickets} target="_blank">Buy tickets!</a>
              </div>
              <div className="Event-merch">
                <a href={event.merch} target="_blank">Buy merch!</a>   {/* this should eventually be an anchor tag to a relative path */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Event;
