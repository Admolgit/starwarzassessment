import React from 'react';
import LogoImage from '../Images/yellowback.png'
import '../index.css'

function Logo() {
  return (
    <>
      <div className="container">
        <img src={LogoImage} alt="logo" />
      </div>
    </>
  )
}

export default Logo