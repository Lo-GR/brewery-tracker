import React from 'react';
import Beer from "./../img/beer-background-strip.jpg"


function Header(){
  return (
    <>
      <div className="header">
      <img src={Beer} id="beerImage" alt="Delicious Beer Header" />
      </div>
    </>
  )
}

export default Header;