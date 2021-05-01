import React from 'react';
import PropTypes from "prop-types";


function KegDetails(props){
  const {keg} = props;

  return (
    <>
      <h3>Keg Details</h3>
      <h3>Name: {keg.name}</h3>
      <h3>Alcohol Content: {keg.alc} percent</h3>
      <h3>Flavor: {keg.flavor}</h3>
      <h3>Price: {keg.price} dollars</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Remaining Volume: {keg.volume} pints</h3>
    </>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.string
}

export default KegDetails;