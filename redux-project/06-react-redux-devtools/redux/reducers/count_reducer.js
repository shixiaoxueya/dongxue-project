// 该文件是recuder 而且是为count组件做服务的reducer  只能给count用
// 官方不希望reducer写业务逻辑

// 引用变量
import {INCREMENT,DECREMENT} from '../action-types'




//若没有传值时  默认值为0
export default function (preState=0,action){
    // console.log(preState,action);
    // 从action中获取type和data
    const {type,data} = action
    // 提前准备的变量 一个新状态 要交出去
    let newState
    // 用switch判断type是加还是减

    // 如果没有传递preState
    // if (!preState) {
    //     preState = 0;
    // }

    switch (type) {
        // 如果是加法
        case INCREMENT:
            newState = preState + data
            return newState
            // break;   return后直接返回 break没作用了
        // 如果是减法
        case DECREMENT:
            newState = preState - data
            return newState
            // break;
        // 如果不是加也不是减的时候   即初始化的时候
        default:
            return preState
            
    }
}