import React from 'react'
import './Card.css';

const Card = (props) => {
    console.log(props);
  return (
    <div className={`card ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card;