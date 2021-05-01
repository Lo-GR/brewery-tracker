import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';


function KegDetails(props){
  const keg = props.masterKegList[props.kegID]
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
  kegID: PropTypes.string,
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedKeg: PropTypes.string,
}
const mapStateToProps = state =>{
  return {
    formVisible: state.formVisible,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg
  }
}
KegDetails = connect(mapStateToProps)(KegDetails);
export default KegDetails;