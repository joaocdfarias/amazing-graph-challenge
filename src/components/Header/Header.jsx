import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        DevChallenge
      </a>
      <nav>
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
      </nav>
    </header>
  )
}
