import React, { Component } from  'react'
import Count from './components/count'


export default class App extends Component {
  render(){
    // const store = this.props.store   中间转接 给count
    return(
      <Count store = {this.props.store}/>
    )
  }
}