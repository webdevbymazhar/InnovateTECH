import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
   
        <div className="card" style={{width:"18rem"}}>
  <img src={props.imgSrc} className='card-img-top' alt="" />
  <div className="card-body">
    <h5 className="card-title">{props.text}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/" class="btn btn-primary">See More...</NavLink>
  </div>
</div>

    
  )
}

export default Card
