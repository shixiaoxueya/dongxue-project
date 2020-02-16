import React, { Component } from 'react'
import {Button,Icon,Modal} from 'antd'
//引入全屏
import screenfull from 'screenfull'
import {connect} from 'react-redux'
import {createDeleteUserInfoAction} from '../../redux/actions/login'
//时间处理
import dayjs from 'dayjs'
//引入天气请求
import {reqWeather} from '../../api/index'
import './header.less'

const {confirm} = Modal

@connect(
    (state)=>({userInfo:state.userInfo}),
    {deleteUserInfo:createDeleteUserInfoAction}
)
class Header extends Component {
    

    state = {
        isFull:false,//全屏的标识符
        date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss'),//时间戳
        weatherData:{pic:'',temp:''}
    }
    //推出登录
    logout=()=>{
		//清空ueser和token
        // this.props.deleteUserInfo()
        confirm({
			title: '您是要退出吗？',
			content: '退出后需要重新登录',
			okText:'确定',
            cancelText:'取消',
            //简写指向有问题  用箭头函数就可以
			onOk:()=> {
				//清空ueser和token  操作redux
				this.props.deleteUserInfo()
			},
		});
	} 




    //全屏
    fullscreen=()=>{
        // const isFull = !this.state.isFull
        // this.setState({isFull})
        screenfull.toggle()
    }

    //获取天气信息
    getWeatherData =async ()=>{
        //发送Ajax请求
        let weatherData = await reqWeather()
        const {temperature,dayPictureUrl} = weatherData
        this.setState({weatherData:{pic:dayPictureUrl,temp:temperature}})
    }


    //初始化的事
    async componentDidMount(){
        //检测全屏
        screenfull.on('change',()=>{
            const isFull = !this.state.isFull
            this.setState({isFull})
        });
        //每一秒更新一次时间
        this.timeId=setInterval(()=>{
            this.setState({date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss')})
        },1000)
        //调用获取天气信息
        this.getWeatherData()
    }
    componentWillUnmount(){
		clearInterval(this.timeId)
	}
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <Button size="samll" onClick={this.fullscreen}>
                        <Icon type= {this.state.isFull ? 'fullscreen-exit':'fullscreen'}/>
                    </Button>
                    <span>欢迎:{this.props.userInfo.user.username}</span>
                    <Button type="link" onClick={this.logout}>退出登录</Button>
                </div>
                <div className="header-bottom">
                    <div className="bottom-left">
                        <span>首页</span>
                    </div>
                    <div className="bottom-right">
                        <span>{this.state.date}</span>
                        <img src={this.state.weatherData.pic} alt="天气图标"/>
                        <span>温度:{this.state.weatherData.temp}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header