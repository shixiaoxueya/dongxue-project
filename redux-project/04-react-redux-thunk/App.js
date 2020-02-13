import React, { Component } from  'react'
import Container from './container/count-container'


export default class App extends Component {
  render(){
    // const store = this.props.store   中间转接 给count
    return(
      <Container/>
    )
  }
}