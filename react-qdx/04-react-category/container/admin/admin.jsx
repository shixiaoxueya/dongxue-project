import React, { Component } from 'react'
//引入redux
// import {connect} from 'react-redux'
//import {Redirect} from 'react-router-dom'
// import {createDeleteUserInfoAction} from '../../redux/actions/login'
import Check from '../check/check'
import {Layout} from 'antd'
import Header from '../header/header'
import './admin.less'
//引入左侧导航
import Left from '../left/left'
import Home from '../../components/home/home'
import Category from '../../container/category/category'
import Product from '../../container/product/product'
import User from '../../container/user/user'
import Role from '../../container/role/role'
import Bar from '../../components/bar/bar'
import Line from '../../components/line/line'
import Pie from '../../components/pie/pie'
//引入二级路由
import {Switch,Route,Redirect} from 'react-router-dom'


const {Footer,Sider,Content} =Layout

// @connect(
// 	(state)=>({userInfo:state.userInfo}),//映射状态
// 	{deleteUserIofo:createDeleteUserInfoAction}//映射操作状态的方法
// )
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
				<Sider>
					<Left/>
				</Sider>
				<Layout>
					<Header/>
					<Content className="content">
						<Switch>
							<Route path="/admin/home" component={Home}/>
							<Route path="/admin/prod_about/category" component={Category}/>
							<Route path="/admin/prod_about/product" component={Product}/>
							<Route path="/admin/user" component={User}/>
							<Route path="/admin/role" component={Role}/>
							<Route path="/admin/charts/bar" component={Bar}/>
							<Route path="/admin/charts/line" component={Line}/>
							<Route path="/admin/charts/pie" component={Pie}/>
							<Redirect to="admin/home"/>
						</Switch>
					</Content>
					<Footer className="footer">
					推荐使用谷歌浏览器，获取最佳用户体验
					</Footer>
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