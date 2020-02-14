//引入
import {SAVE_USERINFO,DELETE_USERINFO} from '../action-type'

//两件事 一个是action  一个是localStorage


export const createSavrUserInfoAction = (personObj) =>{
//向用户localStorage中保存用户信息,目的是为了防止页面刷新redux数据丢失
    const {user,token} = personObj
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)

    return {type:SAVE_USERINFO,data:personObj}
}
//清除
export const createDeleteUserInfoAction =()=>{
    localStorage.clear()
    return {type:DELETE_USERINFO,data:''}
}