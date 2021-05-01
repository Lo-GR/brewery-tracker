import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';
import NewKegForm from './NewKegForm';
import * as a from "../actions/index";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    console.log(props)
  }

  handleClick = () => {
    if (this.props.selectedKeg != ""){
      const { dispatch } = this.props;
      dispatch(a.selectKeg(""))
    }else{
      const { dispatch } = this.props;
      const action = a.toggle();
      dispatch(action);
    }
  }
  handleChangingSelectedKeg = (id) =>{
    const { dispatch } = this.props;
    dispatch(a.selectKeg(id))
  }
  // handlePints = (id) =>{
  //   const keg = this.state.masterKegList.filter(e=>e.id === id)[0];
  //   if (keg.volume > 0){
  //     const newKeg = {...keg, volume: (keg.volume)-1};
  //     const modifiedKegInList = this.state.masterKegList.filter(e=>e.id !== id).concat(newKeg);
  //     this.setState({
  //       masterKegList: modifiedKegInList
  //     })
  //   }
  //   document.getElementById(id).style.width= keg.volume + "px";
  // }
  handleAddingNewKeg = (newKeg) =>{
    const action = a.addKeg(newKeg);
    const { dispatch } = this.props;
    dispatch(action);
    dispatch(a.toggle());
  }
  render() {
    let buttonText = "Return to Keg List";
    let currentlyVisibleState = null;
    if(this.props.selectedKeg != ""){
      currentlyVisibleState = <KegDetails keg = {this.props.selectedKeg} />
    } else if (this.props.formVisible){
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddingNewKeg} />
    } else {
      buttonText ="Add Keg";
      currentlyVisibleState = <KegList onKegSelection={this.handleChangingSelectedKeg} onPints={this.handlePints} />
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedKeg: PropTypes.string
}
const mapStateToProps = state =>{
  return {
    formVisible: state.formVisible,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;