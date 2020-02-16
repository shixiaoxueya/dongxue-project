import React, { Component } from 'react'
//引入redux
import {connect} from 'react-redux'
//import {Redirect} from 'react-router-dom'
import {createDeleteUserInfoAction} from '../../redux/actions/login'
import Check from '../check/check'
import {Layout} from 'antd'
import Header from '../header/header'
import './admin.less'


const {Footer,Sider,Content} =Layout

@connect(
	(state)=>({userInfo:state.userInfo}),//映射状态
	{deleteUserIofo:createDeleteUserInfoAction}//映射操作状态的方法
)
@Check
class Admin extends Component {


	/* logout=()=>{
		//清空ueser和token
		this.props.deleteUserIofo()
	} */



	render() {
		//const {isLogin} = this.props.userInfo
		/* if (!isLogin) {
			// this.props.history.replace('/login')
		} */
		//if(!isLogin) return <Redirect to="/login"/> //从方法可以不往下执行代码
		return (
			<Layout className="layout">
				<Sider>Sider</Sider>
				<Layout>
					<Header/>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}

/* Admin = connect(
	(state)=>({userInfo:state.userInfo}),//映射状态
	{deleteUserIodo:createDeleteUserInfoAction}//映射操作状态的方法
)(Admin) */
/* export default connect (
	(state)=>({userInfo:state.userInfo}),//映射状态
	{deleteUserIodo:createDeleteUserInfoAction}//映射操作状态的方法
)(Admin) */
export default Admin