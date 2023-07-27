import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../card/Cards';

const Datafetch = (props) => {

    const [dataa, setdataa] = useState([])   

    const getdata = async () => {
        const responce = await fetch(props.url)
        const data = await responce.json();
        setdataa(data)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            getdata()
          }, 1000);
          return () => clearTimeout(timer);
    }, [])
    

    return (
        <div>
            {dataa && dataa.map((data)=>(
                <Cards data={data}/>
            ))}
        </div>
              
    )
}

export default Datafetch
