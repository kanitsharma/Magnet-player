import React, { Component } from 'react'
import './css/content.css'

let Value
const handleChange = (event) => {
    Value = event.target.value
  }
const Banner= (props) => {

  return(
    <div className='contentcontainer'>
      <div className='row'>
        <input type="text" className="torrentinput" onChange={handleChange}  placeholder="Magnet : " />
        <input type= "button" className='button' onClick = { () => props.changeuri(Value)} value = {props.store.buttontitle} />
      </div>
    </div>
  )
}

export default Banner
