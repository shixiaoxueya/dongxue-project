// 该文件是容器组件--负责给UI组件传递　　redux中的装填,用于操作状态的方法
import Count from '../components/count'
//引入connect方法  

import {connect} from 'react-redux'
/* 
connect方法的作用
    connect函数调用所返回的那个函数能够生成一个容器组件
    connect函数能让UI组件和容器组件建立起联系

*/

export default connect(
    ()=>({a:1}),//这个函数必须返回一个对象，该对象的key作为props属性的key，该对象的value作为props属性的value
    ()=>({})//这个函数必须返回一个对象，该对象的key作为props属性的key，该对象的value作为props属性的value
)(Count)