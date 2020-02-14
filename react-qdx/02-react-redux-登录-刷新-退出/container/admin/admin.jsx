import React, { Component } from 'react'
//引入redux
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createDeleteUserInfoAction} from '../../redux/actions/login'

class Admin extends Component {


	logout=()=>{
		//清空ueser和token
		this.props.deleteUserIodo()
	}



	render() {
		const {isLogin} = this.props.userInfo
		/* if (!isLogin) {
			// this.props.history.replace('/login')
		} */
		if(!isLogin) return <Redirect to="/login"/> //从方法可以不往下执行代码
		return (
			<div>
				欢迎登录:{this.props.userInfo.user.username}
				<button onClick={this.logout}>退出登录</button>
			</div>
		)
	}
}


export default connect (
	(state)=>({userInfo:state.userInfo}),//映射状态
	{deleteUserIodo:createDeleteUserInfoAction}//映射操作状态的方法
)(Admin)