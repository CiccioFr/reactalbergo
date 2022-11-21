import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <React.Fragment>
      <div>
        {/* <header className={classes.header}> <h2> - header - </h2> </header> */}
        <nav>
          <ul>
            <li> <NavLink to="/cinema/cinema"> - Cinema - </NavLink > </li>
            <li> <NavLink to="/albergo/wellcome"> Albergo </NavLink > </li>

            <li> <NavLink to="/percorsoUrlCcc"> Pagina di prova </NavLink > </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default NavBar
