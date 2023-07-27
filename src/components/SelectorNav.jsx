import React from 'react'
import { Link } from 'react-router-dom'

const SelectorNav = () => {
  return (
    <ul className="nav justify-content-center naav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
      </li>
      <li className="nav-item">
        
        <Link className="nav-link" to="/launchesvehical">Ships</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/agency">Missions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/spacecraft">Space-Craft</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/spacestation">Capsule</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/launch">Launch</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pads">Pads</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/location">Launch Pads</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/astro">Cores</Link>
      </li>
      
    </ul>
  )
}

export default SelectorNav
