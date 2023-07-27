import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div className="Appp">
    <header className="header">
      <h1>Space Odyssey</h1>
    </header>
    <main className="main">
      <section className="hero-section">
        <h2>Explore the Cosmos</h2>
        <p>Discover the wonders of space and the universe.</p>
      </section>
      <section className="info-section">
        <h3>What We Offer</h3>
        <ul>
          <li>Stargazing Tours</li>
          <li>All the information about SPACE X</li>
          <li>Interstellar Excursions</li>
        </ul>
      </section>
    </main>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Space Odyssey. All rights reserved.</p>
    </footer>
  </div>
  )
}

export default Home
