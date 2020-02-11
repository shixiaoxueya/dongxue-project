import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './img/logo.png'
import './css/login.less'
const {Item} = Form

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        // console.log(this.props)
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
                                        { required: true, message: '密码必须输入!'},
                                        { max:12, message:"密码必须小于等于12位"},
                                        { min:4, message:"密码必须大于等于4位"},
                                        {pattern:/^\w+$/,message:"密码必须是英文、数字或下划线组成"}
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

export default Form.create()(Login);