import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Pads = () => {
  const h1="hi from pads"
  return (
    <div>
      <Datafetch h1={h1} url="https://api.spacexdata.com/v3/landpads" />
    </div>
  )
}

export default Pads
