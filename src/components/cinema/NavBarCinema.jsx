import React from 'react'

function NavBarCinema() {
  return (
    <>
      <nav>
        <div>NavBarCinema</div>
        <ul>
          <li> <NavLink to="/cinema"> - Cinema - </NavLink > </li>
          <li> <NavLink to="/locandina"> Locandina </NavLink > </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBarCinema