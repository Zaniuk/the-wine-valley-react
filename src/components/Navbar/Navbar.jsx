import React, { useRef, useState } from 'react'
import NavbarIcon from './NavbarIcon'
import NavBarItem from './NavBarItem'
import './NavBar.css'
export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [icon, setIcon] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setIcon(!icon)
  }
  return (
    <header>
      <nav id='navbar' className='navbar'>
        <ul>
          {(toggleMenu) && (
            <>
              <NavBarItem />
              <NavBarItem />
              <NavBarItem />
              <NavBarItem />
            </>
          )}
        </ul>

      </nav>
      <div className="button-container">
        <button onClick={toggleNav} className="navbar-btn">
           {toggleNav? <NavbarIcon key={`icon-${icon}`} icon={icon}/> : <p>AA</p>}
        </button>
      </div>
    </header>
  )
}
