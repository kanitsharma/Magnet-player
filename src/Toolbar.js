import React, { Component } from 'react'
import './css/toolbar.css'

const Toolbar= (props) => {
  const navitem= props.store.navitems.map((obj) => {
    return(
      <li className="navitems">
        {obj}
      </li>
    )
  })
  return(
    <div className='container' >
        <img className='image' alt={props.store.imgalt} src={require('./heart.png')} height="42" width="42"></img>
        {navitem}
    </div>
  )
}

export default Toolbar
