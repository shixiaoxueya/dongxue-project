import React, { Component } from 'react'
import './left.less'
import logo from '../../static/imgs/logo.png'
//引入antd
import {Menu,Icon} from 'antd'
//引入menu
import menus from '../../config/menu-config'
import { Link,withRouter} from 'react-router-dom'
//引入redux
import {createSaveTitleAction} from '../../redux/actions/header'
import {connect} from 'react-redux'


const {SubMenu,Item} = Menu



@connect(
    (state)=>({title:state.headerTitle}), //映射状态
    {saveTitle:createSaveTitleAction}//映射操作状态的方法
)
@withRouter  //非路由组件  想使用路由组件的API,要经过withRouter的包装
class Left extends Component {

    //redux没有title根据路径去找
    getTitle=()=>{
        let title = ''
        let {pathname} =this.props.location
        //登录成功的时候
        if(pathname === '/admin') pathname = '/admin/home'
        let currentKey = pathname.split('/').reverse()[0]
        menus.forEach((menuObj)=>{
            if (menuObj.children instanceof Array) {
                //如果菜单有孩子
                let result = menuObj.children.find((childMenu)=>{
                    return childMenu.key === currentKey
                })
                if (result)  title = result.title
            }else{
                //如果当前菜单没有孩子
                if(menuObj.key === currentKey) title=menuObj.title
            
            }
        })
        this.props.saveTitle(title)
    }




    //刷新重新挂载
    componentDidMount(){
        //判断redux中是否有title 没有去找路径
        if (!this.props.title) {
            this.getTitle()
        }
    }



    //动态生成菜单
    createMenu=(menuArr)=>{
        return menuArr.map((menuObj)=>{
            if(!menuObj.children){
                return (
                    <Item key={menuObj.key} onClick={()=>{this.props.saveTitle(menuObj.title)}}>
                        <Link to={menuObj.path}>
                            <Icon type={menuObj.icon} />
                            <span>{menuObj.title}</span>
                        </Link>
                    </Item>
                )
            }else{
                return (
                    <SubMenu 
                        key={menuObj.key}
                        title={
                            <span>
                                <Icon type={menuObj.icon} />
                                <span>{menuObj.title}</span>
                            </span>
                        }
                    >
                        {this.createMenu(menuObj.children)}
                    </SubMenu>
                )
            }
        })
    }


    render() {
        //通过withRoute获取location里的pathname 取这个路径的最后一个名字 用数组的方法
        const {pathname} = this.props.location
        let openKey = pathname.split('/') //拿到的是一个数组  使用的时候去掉[]
        let selectedKey = pathname.split('/').reverse()[0]//字符串

        return (
            <div className="left">
                <div className="left-top">
                    <img src={logo} alt="logo"/>
                    <h1>商品管理系统</h1>
                </div>
                <div>
                    <Menu
                    selectedKeys={[selectedKey]}//默认选中那个菜单
                    defaultOpenKeys={openKey}//默认展开那个菜单(该菜单有子菜单)
                    mode="inline"//菜单范围内展开
                    theme="dark"//主题
                    >
                        {/* <Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Item key="5">
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </Item>
                            <Item key="6">
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </Item>
                        </SubMenu> */}
                        {this.createMenu(menus)}
                    </Menu>
                </div>
            </div>
        )
    }
}


export default Left