// 该文件用于创建action对象
//引入变量
import {INCREMENT,DECREMENT} from '../action-types'

export const createIncrementAction = (value)=>({type:INCREMENT,data:value})
export const createDecrementAction = (value)=>({type:DECREMENT,data:value})


//异步的action中包裹这同步的action
export const createIncrementAsyncAction = (value,time)=>{
    return (dispath)=>{
        setTimeout(()=>{
            dispath(createIncrementAction(value))
        },time)
    }
}