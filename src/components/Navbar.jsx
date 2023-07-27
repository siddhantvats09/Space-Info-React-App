import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Space X</a>
    <button className="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
      <span className="navbar-text">
        Beyond Space
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
