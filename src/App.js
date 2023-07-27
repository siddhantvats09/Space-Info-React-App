import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Navbar from './components/Navbar'
import SelectorNav from './components/SelectorNav'
import Home from './pages/Home'
import Cards from './card/Cards'
import Events from './pages/Events'
import Launches from './pages/Launches'
import Agency from './pages/Agency'
import Astronauts from './pages/Astronauts'
import Launchvehicles from './pages/Launchvehicles'
import Pads from './pages/Pads'
import Spacecraft from './pages/Spacecraft'
import Spacestation from './pages/Spacestation'
import Locations from './pages/Locations'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <SelectorNav/>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/events" element={<Events/>} />
        <Route path ="/card" element={<Cards/>} />
        <Route path ="/launch" element={<Launches />} />
        <Route path ="/agency" element={<Agency/>} />
        <Route path ="/spacestation" element={<Spacestation/>} />
        <Route path ="/spacecraft" element={<Spacecraft/>} />
        <Route path ="/launchesvehical" element={<Launchvehicles/>} />
        <Route path ="/pads" element={<Pads/>} />
        <Route path ="/location" element={<Locations/>} />
        <Route path ="/astro" element={<Astronauts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
