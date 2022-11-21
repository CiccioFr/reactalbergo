import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <React.Fragment>
      <div>NavBar</div>
      <div>
        {/* <header className={classes.header}> <h2> - header - </h2> </header> */}
        <nav>
          <ul>
            <li> <Link to="/wellcome"> NavLink - wellcome </Link > </li>
            <li> <NavLink to="/chiSiamo"> NavLink - chiSiamo </NavLink > </li>
            <li> <NavLink to="/camere"> NavLink - camere </NavLink > </li>
            <li> <NavLink to="/contattaci"> NavLink - contattaci </NavLink > </li>
            <li> <Link to="/doveSiamo"> NavLink - doveSiamo </Link > </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default NavBar
