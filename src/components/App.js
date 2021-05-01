import React from "react";
import Header from "./Header";
import KegControl from './KegControl'
import { v4 } from 'uuid';



function App(){
    return (
      <>
        <div className="topper"></div>
        <Header key={v4()}/>
        <h3 className="title">Welcome to the Brewery!</h3>
        <KegControl key={v4()}/>
      </>
    )
}

export default App;