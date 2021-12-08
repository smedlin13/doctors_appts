import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <ul>
          <li>
            <a href="/doctors">Doctors</a>
          </li>
            <br />
          <li>
            <a href="/users">Patients</a>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;