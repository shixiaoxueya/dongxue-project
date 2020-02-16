import React, { Component } from 'react'
import {Form, Icon, Input, Button, message } from 'antd';
import logo from './img/logo.png'
// import  myAxios from '../../api/myAxios'
import './css/login.less'
import {reqLogin} from '../../api/index'
//引入redux相关的配置
import {connect} from 'react-redux'
import {createSavrUserInfoAction} from '../../redux/actions/login'
// import {Redirect} from 'react-router-dom'
import Check from '../check/check'



const {Item} = Form

@connect(
    (state)=>({userInfo:state.userInfo}),//用于映射状态
    {saveUserInfo:createSavrUserInfoAction},//用于映射操作状态的方法
)

@Form.create()
@Check
class Login extends Component {

    //定义密码校验器
    passwordValidator = (rule,value,callback) =>{
        // 1.value是用户的输入
        // 2.callback何时调用   当用输入的东西不合法的时候

        if (!value) {
            callback('密码必须输入!!')
        }else if (value.length > 12) {
            callback('密码必须小于等于12位')
        }else if (value.length < 4) {
            callback('密码必须大于等于4位')
        }else if (!(/^\w+$/).test(value)) {
            callback('密码必须是由英文、数字或者下划线组成')
        }else{
            callback()
        }
    }

    //响应表单提交
    handleSubmit = (event) =>{
        event.preventDefault()
                        //为了下面的await添加的
        this.props.form.validateFields(async(err,values) => {
            if (!err) {
                // const {username,password} = values
                // console.log('发送了网络请求',values)   
                /*  myAxios.post('http://localhost:3000/login',values).then(
                    (response)=>{
                        console.log("请求成功的回调",response)
                        // const status = response.status
                        // const msg = response.msg 

                        const {status} = response
                        if (status === 0) alert("登陆成功");
                            else alert("登录失败")
                    }
                    // (error)=>{console.log("请求失败的回调",error)}  失败放在了相应拦截器里面
                )*/
                //只会返回成功的实例 可以用await
                let result = await reqLogin(values)
                const {status,data,msg} = result
                if (status === 0) {
                    message.success('登录成功')
                    //向redux中保存用户信息
                    this.props.saveUserInfo(data)
                    //跳转到admin页面
                    this.props.history.replace('/admin')
                }else{
                    // message.error(msg)
                    message.warning(msg)
                }
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        // console.log(this.props)
        //跳转
        // const {isLogin} = this.props.userInfo
        // if(isLogin) return <Redirect to="/admin"/> 
        return (
            <div id="login">
                <div className ="header">
                    <img src={logo} alt="logo"/>
                    <h1>商品管理系统</h1>
                </div>
                <div className ="content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [
                                        { required: true, message: '用户名必须输入!'},
                                        { max:12, message:"用户名必须小于等于12位"},
                                        { min:4, message:"用户名必须大于等于4位"},
                                        {pattern:/^\w+$/,message:"用户名必须是英文、数字或下划线组成"}
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {validator:this.passwordValidator}
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,    
                                )
                            }                   
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </div>
            </div>
        )
    }
}

// export default Form.create()(Login);


/* export default connect(
    (state)=>({userInfo:state.userInfo}),//用于映射状态
    {saveUserInfo:createSavrUserInfoAction},//用于映射操作状态的方法
)(Form.create()(Login)) */
export default Login