import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from '../EventList/EventList';
//import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';

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

const events = [
  event,
  event,
  event,
  event,
  event,
  event
];

class RaveApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      events: []
    };
  }

  render() {
    return (
      <div className="App">
      {/* Title, Logo, & Menu button */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rave App</h1>
          {/* <Menu /> */}
        </header>

        {/* body */}
        <div className="beginning">
          <p className="App-intro">
            To get started, click on the event you are interested in and save to your list.
          </p>

          <SearchBar />
          <EventList events={events} />
        </div>

      </div>
    );
  }
}

export default RaveApp;
