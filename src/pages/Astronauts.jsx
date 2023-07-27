import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Astronauts = () => {
  const h1="hi from astro"
  // url="https://ll.thespacedevs.com/2.2.0/astronaut/?format=json" 
  return (
    <div>
      <Datafetch h1={h1} url="https://api.spacexdata.com/v3/cores"/>
    </div>
  )
}

export default Astronauts
