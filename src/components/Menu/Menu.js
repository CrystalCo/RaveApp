import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
        // Close the dropdown menu if the user clicks outside of it -- but i don't think this goes here b/c it doesnt work
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    }

  render() {
    return (
      <div className="menu">
        <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#myAccount">My Account</a>
            <a href="#calendar">Calendar</a>
            <a href="#shopBy">Shop By...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;

/*
<ul className="primary-menu">
  <li>My Account</li>
  <li>Calendar</li>
  <li>
    Shop By...
      <li className="future">Artist</li>
      <li className="future">Brand</li>
      <li className="future">Festival</li>
  </li>
  <li className="future">Buy Tickets</li>
  <li className="future">Ravers Near Me</li>
</ul>
*/
