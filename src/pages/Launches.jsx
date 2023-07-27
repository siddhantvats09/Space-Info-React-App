import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Launches = () => {
  const h1="hi from launch"
  console.log("hii from launch")
  return (
    <div>
       <Datafetch h1={h1} url="https://api.spacexdata.com/v3/launches/latest" />
    </div>
  )
}

export default Launches
