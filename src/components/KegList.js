import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

function KegList(props){
  return (
    <>
      {Object.values(props.masterKegList).map((keg)=>
      <>
        <div className="kegs">
          <Keg 
          whenKegClicked={props.onKegSelection}
          name = {keg.name}
          id={keg.id}
          flavor={keg.flavor}
          price={keg.price}
          alc={keg.alc}
          brand={keg.brand}
          volume={keg.volume}/>
          <button onClick={()=> props.onPints(keg.id)}>Buy Pint</button>
        </div>
      </>
      )}
    </>
  )
}

KegList.propTypes = {
  masterKegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPints: PropTypes.func
}
const mapStateToProps = state =>{
  return {
    masterKegList: state
  }
}
KegList = connect(mapStateToProps)(KegList);
export default KegList;