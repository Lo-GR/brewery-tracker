import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: [{name: "keggy", id: "1"}],
      selectedKeg: null
    }
  }
  handleClick = () => {
    if (this.state.kegDeetsVisible){
      this.setState({
        kegDeetsVisible: false
      })
    }
  }
  handleChangingSelectedKeg = (id) =>{
    const keg = this.state.masterKegList.filter(e => e.id !== id);
    this.setState({
      selectedKeg: keg,
    })
  }
  render(){
    let buttonText = "Temp";
    let currentlyVisibleState = null;
    if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetails/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
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