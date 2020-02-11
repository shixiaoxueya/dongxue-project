// UI组件,  在该组件中不能使用任何的reduxAPI


import React, { Component } from 'react'
// import store from '../redux/store'  推荐去index里面引入  通过App传递
// import {INCREMENT,DECREMENT} from '../redux/action-types'
// import {createIncrementAction,createDecrementAction} from '../redux/count-action-creator'



export default class Count extends Component {
    //原状态
    // state = {
    //     number : 0
    // }

    //加法
    increment =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态
        // const number = this.state.number
        // this.setState({number:number + value*1})
        //调用dispatch分发一个"加"的Acton
        // this.props.store.dispatch({type:INCREMENT,data:value*1})
        // this.props.store.dispatch(createIncrementAction(value*1))
    }
     //减法
     decrement =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态
        // const number = this.state.number
        // this.setState({number:number - value*1})
        // this.props.store.dispatch({type:DECREMENT,data:value*1})
        // this.props.store.dispatch(createDecrementAction(value*1))
    }
    //奇数才加
    incrementOdd =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态
        // const number = this.state.number
        const number = this.props.store.getState()
        if(number%2 ===1 ){
            // this.setState({number:number + value*1})
            // this.props.store.dispatch({type:INCREMENT,data:value*1})
            // this.props.store.dispatch(createIncrementAction(value*1))
        }
    }
    //延迟加
    incrementAsync =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态
        // const number = this.state.number
        setTimeout(() => {
            // this.setState({number:number + value*1})
            // this.props.store.dispatch({type:DECREMENT,data:value*1})
            // this.props.store.dispatch(createIncrementAction(value*1))
        }, 1000);
    }
    
    render() {
        return (
            <div>
                <h2>当前计数为:xxx</h2>
                <select ref="checkNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;

                <button onClick={this.increment}> + </button>&nbsp;
                <button onClick={this.decrement}> - </button>&nbsp;
                <button onClick={this.incrementOdd}> 奇数相加 </button>&nbsp;
                <button onClick={this.incrementAsync}> 延迟相加 </button>&nbsp;
            </div>
        )
    }
}
