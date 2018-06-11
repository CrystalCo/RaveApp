import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Age-Limit': 'age limit',
  'Genre': 'genre',
  'Near-Me': 'nearby'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (<li key={sortByOptionValue}>{sortByOptionValue}</li>);
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search An Artist, Brand, or Event" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>SEARCH</a>
        </div>
      </div>
    )
  }
};

export default SearchBar;


/*   Jammming SearchBar for Spotify API:

constructor(props) {
  super(props);

  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
}

search(term) {
  this.props.onSearch(term);
}

handleTermChange(e) {
  this.search(e.target.value);
}

handleKeyPress(e) {
  let key = e.key;
  let term = e.target.value;
  if (key === 'enter' || key === 'Enter' || key === 'return') {
    return this.search(term);
  }
}
*/
