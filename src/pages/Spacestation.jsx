import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Spacestation = () => {
  const h1="hi from space Station"
  return (
    <div>
       <Datafetch h1={h1} url="https://api.spacexdata.com/v3/capsules" />
    </div>
  )
}

export default Spacestation
