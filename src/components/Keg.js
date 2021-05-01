import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <>
      <div onClick = {()=> props.whenKegClicked(props.id)}>
        <h3>{props.name} from {props.brand}</h3>
        <h3>{props.flavor} | {props.alc}% | {props.price}$</h3>
        <div className="remainder" id={props.id}>{props.volume}</div>
      </div>
    </>
  )
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  flavor: PropTypes.string,
  alc: PropTypes.string,
  price: PropTypes.string,
  brand: PropTypes.string,
  volume: PropTypes.string
  
}
export default Keg;