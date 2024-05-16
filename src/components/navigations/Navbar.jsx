import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <nav>
    <ul>
      <li>
        <Link className="text-red-700 font-bold" to="/">Home</Link>
      </li>
      <li>
        <Link className='font-bold' to="/converseall">Converse All</Link>
      </li>
      <li>
        <Link className='font-bold' to="/about">About</Link>
      </li>
    </ul>    
  </nav>
  )
}
