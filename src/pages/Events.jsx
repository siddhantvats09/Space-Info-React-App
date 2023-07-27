import React from 'react'
import Cards from '../card/Cards'
import Datafetch from '../datafetch/Datafetch'

const Events = () => {
    // const url=`https://ll.thespacedevs.com/2.2.0/event/?format=json`
    const h1="hii from event"
    console.log("hi from event")
  return (
    <>
    <Datafetch h1={h1} url="https://api.spacexdata.com/v3/history"/>
     
    </>
  )
}

export default Events
