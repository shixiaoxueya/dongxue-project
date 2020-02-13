//该文件是为person服务的reducer
//redux必须是纯函数

import {ADDPERSON} from '../action-types'

export default function (preState=[{name:'fangfang',age:18}],action){
    // console.log(action);

    const {type,data} = action

    let newState


    switch (type) {
        case ADDPERSON:

        /* 这样写就会产生新数组,地址发生改变,redux就会做出错误的判断,从而不会更新页面
        preState.unshift(data)
        newState = preState */
            newState = [data,...preState] //这种写法就会产生新数组,地址发生改变,redux就不会错误判断
            return newState
    
        default:
            return preState
    }
}