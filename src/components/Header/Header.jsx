import React, { useState } from 'react'
import './Header.css'

export const Header = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => {
    setDropdown(!dropdown)
  }

  return (
    <header>
      <a className="logo" href="/">
        DevChallenge
      </a>
      <nav>
        <button className="burger-menu" onClick={handleClick}>
          ≣
        </button>
        {dropdown && (
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
