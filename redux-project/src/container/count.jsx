// 该文件是容器组件--负责给UI组件传递　　redux中的装填,用于操作状态的方法
// import Count from '../components/count'
//引入connect方法  

import {connect} from 'react-redux'
/* 
connect方法的作用
    connect函数调用所返回的那个函数能够生成一个容器组件
    connect函数能让UI组件和容器组件建立起联系

*/
/* 
    connect函数调用要传递两个回调函数 第一个回调函数用于传递状态,第二个回到函数用于传递操作状态的方法
    两个回调函数均必须返回一个对象
    connect函数调用所返回的那个函数能够生成一个容器组件
    connect函数能让UI组件和容器建立起联系
    备注:调用connect也可以传递一个回调函数,一个对象
*/

//引入方法
import {createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from '../redux/action-creators/count-action-creator.js'
// import { createRenderer } from 'react-dom/test-utils'

import React, { Component } from 'react'

class Count extends Component {
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
        this.props.increment(value*1)
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
        this.props.decrement(value*1)
    }
    //奇数才加
    incrementOdd =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态如果当前展示的是奇数,就可以加
        // const number = this.state.number
        // const number = this.props.store.getState()
        const number = this.props.number
        if(number%2 ===1 ){
            // this.setState({number:number + value*1})
            // this.props.store.dispatch({type:INCREMENT,data:value*1})
            // this.props.store.dispatch(createIncrementAction(value*1))
            this.props.increment(value*1)
        }
    }
    //延迟加
    incrementAsync =()=>{
        //获取用户选择的数字
        const value = this.refs.checkNumber.value
        //更新状态
        // const number = this.state.number
        //用定时器
        /* setTimeout(() => {
            // this.setState({number:number + value*1})
            // this.props.store.dispatch({type:DECREMENT,data:value*1})
            // this.props.store.dispatch(createIncrementAction(value*1))
            this.props.increment(value*1)
        }, 1000); */

        //这个方法可以自定义等多久  加多少
        this.props.incrementAsync(value*1,1000)
    }
    
    render() {
        return (
            <div>
                {/* <h2>当前计数为:{this.props.number}</h2> 这样拿得到的不只是number 给他传递的时候state拿到的不只是number */}
        <h2>当前计数为:{this.props.number},下方组件的人数为:{this.props.persons.length}</h2>
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


export default connect(
    // ()=>({a:1}),//这个函数必须返回一个对象，该对象的key作为props属性的key，该对象的value作为props属性的value
    // ()=>({})//这个函数必须返回一个对象，该对象的key作为props属性的key，该对象的value作为props属性的value
    // state=>({number:state}),//传递(映射)状态给UI组件  //组件公用的时候state拿到的不只是number

    state => ({
        number:state.number,
        persons:state.persons
    }),

   // dispatch=>({                                                               //回调函数
        // increment:(value)=>{dispatch(createIncrementAction(value))},
        // decrement:(value)=>{dispatch(createDecrementAction(value))},

        //给UI组件传递(映射)操作状态的方法的完整写法
        // increment:value=>{dispatch(createIncrementAction(value))},
        // decrement:value=>{dispatch(createDecrementAction(value))},


   // })//传递(映射)操作状态的方法给UI组件
    {
         //给UI组件传递(映射)操作状态的方法精简写法                           //对象
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction,
    }

)(Count)

