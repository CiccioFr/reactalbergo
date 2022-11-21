import React from 'react'

function NavBarAlbergo() {
  return (
    <React.Fragment>
      <div>
        {/* <header className={classes.header}> <h2> - header - </h2> </header> */}
        <nav>
          <div>NavBarAlbergo</div>
          <ul>
            <li> <NavLink to="/"> - Home - </NavLink > </li>
            <li> <NavLink to="/wellcome"> NavLink - wellcome </NavLink > </li>
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

export default NavBarAlbergo