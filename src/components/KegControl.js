import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';
import NewKegForm from './NewKegForm';
import {connect} from 'react-redux';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null,
      formVisible: false
    }
  }
  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    }else{
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }
  handleChangingSelectedKeg = (id) =>{
    const keg = this.state.masterKegList.filter(e => e.id === id)[0];
    this.setState({
      selectedKeg: keg,
    })
  }
  handlePints = (id) =>{
    const keg = this.state.masterKegList.filter(e=>e.id === id)[0];
    if (keg.volume > 0){
      const newKeg = {...keg, volume: (keg.volume)-1};
      const modifiedKegInList = this.state.masterKegList.filter(e=>e.id !== id).concat(newKeg);
      this.setState({
        masterKegList: modifiedKegInList
      })
    }
    document.getElementById(id).style.width= keg.volume + "px";
  }
  handleAddingNewKeg = (newKeg) =>{
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newKegList,
      formVisible: false})
  }
  render(){
    let buttonText = "Return to Keg List";
    let currentlyVisibleState = null;
    if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} />
    } else if (this.state.formVisible){
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddingNewKeg} />
    } else {
      buttonText ="Add Keg";
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onPints={this.handlePints} />
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default KegControl;