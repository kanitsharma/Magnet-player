import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Banner from './banner'
import Content from './content'
import './css/app.css'

const Main= (props) => {
  return(
    <div className='app'>
      <Toolbar store={props.store} />
      <Banner store={props.store} />
      <Content store={props.store} changeuri = {props.changeuri}/>
    </div>
  );
}

export default Main;
