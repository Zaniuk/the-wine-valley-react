import React, { useState } from 'react'
import NavBarItem from './NavBarItem'
export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  return (
    <header>
      <nav className='navbar'>
      {(toggleMenu) && (
        <ul>
          <NavBarItem/>
          <NavBarItem/>
          <NavBarItem/>
          <NavBarItem/>
        </ul>
      )}
      
      </nav>
      <button onClick={toggleNav} className="btn">BTN</button>
    </header>
  )
}
