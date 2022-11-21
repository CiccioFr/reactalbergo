import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <React.Fragment>
      <div>NavBar</div>
      <div>
        {/* <header className={classes.header}> <h2> - header - </h2> </header> */}
        <nav>
          <ul>
            <li> <Link to="/welcome"> Link - welcome </Link > </li>
            <li> <Link to="/chiSiamo"> Link - chiSiamo </Link > </li>
            <li> <Link to="/camere"> Link - camere </Link > </li>
            <li> <Link to="/contattaci"> Link - contattaci </Link > </li>
            <li> <Link to="/doveSiamo"> Link - doveSiamo </Link > </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default NavBar
