import React, { Component } from  'react'
import Container from './container/count'
import PersonContainer from './container/person'

export default class App extends Component {
  render(){
    // const store = this.props.store   中间转接 给count
    return(
      <div>
        <Container/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PersonContainer/>
      </div>
    )
  }
}