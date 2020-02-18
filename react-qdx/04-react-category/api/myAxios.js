// 该文件是对Axios的二次封装
import axios from 'axios'
//引入那个库  转换成urlencoded
import qs from 'querystring'
//引入antd
import {message} from 'antd'

//引入请求基本路径
import {BASE_URL} from '../config/index'
//引入nprogress  用于实现进度条
import Nprogress from 'nprogress'
//引入store,目的是获取redux中的token
import store from '../redux/store'
//引入action   用于创建action
import {createDeleteTitleAction} from '../redux/actions/header'
import {createDeleteUserInfoAction} from '../redux/actions/login'

//引入nprogress 样式
import 'nprogress/nprogress.css'


//请求基本路径
axios.defaults.baseURL = BASE_URL


//使用axios的请求拦截器
axios.interceptors.request.use((config)=>{
    //获取token
    if (store.getState().userInfo.token) {
        const {token} = store.getState().userInfo
        config.headers.Authorization = 'atguigu_'+ token
    }
    
    //进度条开始
    Nprogress.start()
    //config是配置对象,里面包含着所有本次请求的必须信息,比如:请求方式,请求地址
    const {method,data} = config
    // 如果发送的请求方式是post并且请求体携带的参数是json编码,把他转换成urlencoded
    if (method.toLocaleLowerCase() === 'post' && data instanceof Object) {
        //把是对象的参数转成urlencoded   可以用一个库写
        config.data = qs.stringify(data)
    }

    
    // console.log("请求拦截器",method,data);
    return config
})

//使用axios的相应拦截器
axios.interceptors.response.use(
    (response)=>{
        //进度条停止
        Nprogress.done()
        //如果相应的状态码为2开头,axios认为相应是成功的
        console.log("响应拦截器--成功");
        return response.data
    },
    (err)=>{   //统一处理ajax请求失败失败  
         //进度条停止
        Nprogress.done()
        //如果相应的状态码不是2开头,活着是响应超时  axios认为相应是失败的
        // console.log("相应拦截器--失败",err.message);

        // alert(error.message)
        // 使用antd来弹出错误
        //判断token过期没
        if (err.response.status === 401) {
            message.error('身份过期,请重新登录')
            store.dispatch(createDeleteTitleAction())
            store.dispatch(createDeleteUserInfoAction())
        }else{
            message.error('请求失败,请联系管理员')
        }
        

        // return Promise.reject(err.message)    这样写会触发axios发送请求失败的回调
        return new Promise(()=>{})                //中断Promise实例   这样写不会触发axios发送请求失败的回调
    }
)


export default axios