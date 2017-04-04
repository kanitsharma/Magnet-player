import React, { Component } from 'react'
import './css/banner.css'
import Video from './video'
const Banner= (props) => {

  const gg = () => {
    if(props.store.videoplay == false){
    return(
      <div className='bannercolumn'>
        <h1 className='heading1'> {props.store.title} </h1>
        <h2 className='heading2'> {props.store.subtitle} </h2>
      </div>
    )
  }
  else if(props.store.videoplay == true){
    return(
      <div className='bannercolumn'>
        <Video />
      </div>
    )
  }
  }

  return(

    <div className='hcontainer'>
      {gg()}
    </div>
  )

}

export default Banner
