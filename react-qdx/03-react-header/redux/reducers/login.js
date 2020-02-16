//引入
import {SAVE_USERINFO,DELETE_USERINFO} from '../action-type'

//尝试从localStorage中读取用户信息:
// 第一种情况:读取到了,用户登录过来,用读取到的数据初始化redux保存的state
// 第二种情况:没读取到,用户没有登陆过,或者登陆过 但是手动清空了localStorage中的数据,初始化一个空的state



const _user = JSON.parse(localStorage.getItem('user'))
const _token = localStorage.getItem('token')

//如果有就有  没有用后面的  简单的获取值得方式
let initState = {
    user:_user || {},
    token:_token || '',
    //三木表达式  必须既有user和token才可以
    isLogin:(_user && _token) ? true:false
}




export default function (preState=initState,action){
    const {type,data} = action
    let newState
    switch (type) {
        case SAVE_USERINFO:
            const {user,token} = data
            newState = {user,token,isLogin:true}
            return newState
        
        case DELETE_USERINFO:
            newState = {user:{},token:'',isLogin:false}
            return newState
        default:
            return preState
    }
}
