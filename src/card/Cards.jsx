import React from 'react'
import './Cards.css'

const Cards = (props) => {
  

    return (
        <>

           {
            props &&  <div className='maincardbody'>
                <div className="card mb-3">
                    {props.data.image ? (<img src={props.data.image} className="card-img-top" alt="..." height={"200px"} /> ) : (<></>)}
                    {props.data.flickr_images ? (<img src={props.data.flickr_images[0]} className="card-img-top" alt="..." height={"200px"} /> ) : (<></>)}
                    {props.data.status ? (<p className="card-text mycard">{props.data.status}</p>) : (<></>)}
                    {props.data.event_date_unix ? (<p className="card-text mycard">{props.data.event_date_unix}</p>) : (<></>)}
                    <div className="card-body">


                    {props.data.mission_name ? (<p className="card-text">{props.data.mission_name}</p>) : (<></>)}
                    {props.data.ship_name ? (<p className="card-text">{props.data.ship_name}</p>) : (<></>)}
                    {props.data.rocket_name ? (<p className="card-text">{props.data.rocket_name}</p>) : (<></>)}
                    {props.data.name ?(<p className="card-text">{props.data.name}</p>) : (<></>)}
                    {props.data.title ?(<p className="card-text">{props.data.title}</p>) : (<></>)}
                    {props.data.capsule_id ?(<p className="card-text">{props.data.capsule_id}</p>) : (<></>)}
                    {props.data.full_name ?(<p className="card-text">{props.data.full_name}</p>) : (<></>)}

                    

                    {props.data.description ? (<p className="card-text">{props.data.description}</p>) : (<></>)}
                    {props.data.details ? (<p className="card-text">{props.data.details}</p>) : (<></>)}
                    {props.data.home_port ? (<p className="card-text">{props.data.home_port}</p>) : (<></>)}
                    {props.data.successful_launches ? (<p className="card-text mylau">SuccessFull Launches {props.data.successful_launches}</p>) : (<p className="card-text">{props.data.site_name_long}</p>)}
                    {props.data.capsule_serial ? (<p className="card-text mylau">SuccessFull Launches {props.data.capsule_serial}</p>) : (<></>)}


                        
                    {props.data.date ? (<p className="card-text"><small className="text-muted">{props.data.date}</small></p>) : (<></>)}
                    {props.data.first_flight ? (<p className="card-text"><small className="text-muted">{props.data.first_flight}</small></p>) : (<></>)}
                    {props.data.year_built ? (<p className="card-text"><small className="text-muted">{props.data.year_built}</small></p>) : (<></>)}
                    {props.data.mission_id ? (<p className="card-text"><small className="text-muted">Mission ID {props.data.mission_id}</small></p>) : (<></>)}
                    {props.data.site_id ? (<p className="card-text"><small className="text-muted">Site ID {props.data.site_id}</small></p>) : (<></>)}
                    {props.data.launch_date_local ? (<p className="card-text mycard"><small>Launch Date {props.data.launch_date_local}</small></p>) : (<></>)}
                    {props.data.event_date_utc ? (<p className="card-text"><small className="text-muted">{props.data.event_date_utc}</small></p>) : (<></>)}
                    {props.data.original_launch ? (<p className="card-text"><small className="text-muted">{props.data.original_launch}</small></p>) : (<></>)}
                    {props.data.original_launch_unix ? (<p className="card-text"><small className="text-muted">{props.data.original_launch_unix}</small></p>) : (<></>)}
                    {props.data.abs ? (<p className="card-text"><small className="text-muted">{props.data.abs}</small></p>) : (<></>)}
                    {props.data.status ? (<p className="card-text"><small className="text-muted">Status {props.data.status}</small></p>) : (<></>)}
                        
                    </div>
                </div>
            </div>
           }

        </>

    )
}

export default Cards






