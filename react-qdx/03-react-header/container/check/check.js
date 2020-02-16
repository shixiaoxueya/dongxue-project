//check组件是一个高阶组件  接收一个组件   返回一个新组件
//check组件能够对传入的组件,进行权限检查
//例如 未登录不能看admin  登陆了 不能看login

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




export default function(ReceiveComponent){
    @connect(
        (state)=>({isLogin:state.userInfo.isLogin}),
        {}
    )
    class NewComponent extends Component{
        //check检查规则
        //用户没有登录 只能看login 不能看admin会跳转到login  登录了 用户还想看login 跳转到admin
        render(){
            const {isLogin} = this.props
            const {pathname} = this.props.location
            if (!isLogin && pathname === '/admin') {
                return <Redirect to='/login'/>
            }
            if (isLogin && pathname === '/login') {
                return <Redirect to='/admin'/>
            }
            return <ReceiveComponent {...this.props}/>
        }
    }
    return NewComponent
}