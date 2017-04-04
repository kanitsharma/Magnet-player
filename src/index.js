import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js'

export default class Store extends React.Component{

  constructor(){
    super();
    this.changeuri = this.changeuri.bind(this)
    this.state= {
      navitems : [ 'Home' , 'About'],
      imgalt : 'GG',
      title : 'Magnet Player',
      subtitle : 'Stream your torrents online',
      buttontitle: 'Stream',
      butbrowse : 'Browse',
      videoplay : false,
    }
  }

  changeuri(uri){
    const webtorrent = require('webtorrent')
    const client = new webtorrent()
    client.add(uri,{maxBlobLength : 200 * 1000 * 1000 *1000},(torrent) => {
        this.setState({videoplay:true})
        var file = torrent.files.find(function (file) {
        return file.name.endsWith('.mp4' || '.webm' || '.m4v')
      })
      console.log(file);
      file.appendTo('#container')
    })
  }

  componentWillMount(){
  }


  render(){
    return(
      <Main store= {this.state} changeuri = {this.changeuri} />
    );
  }

}


ReactDOM.render(
  <Store />,
  document.getElementById('root')
);
