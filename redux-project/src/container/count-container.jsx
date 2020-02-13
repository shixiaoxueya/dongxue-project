// 该文件是容器组件--负责给UI组件传递　　redux中的装填,用于操作状态的方法
import Count from '../components/count'
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
    createIncrementAsyncAction} from '../redux/action-creators/count-action-creator.js'
// import { createRenderer } from 'react-dom/test-utils'




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

