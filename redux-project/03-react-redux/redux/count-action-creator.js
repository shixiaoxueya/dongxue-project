// 该文件用于创建action对象
//引入变量
import {INCREMENT,DECREMENT} from './action-types'

export const createIncrementAction = (value)=>({type:INCREMENT,data:value})
export const createDecrementAction = (value)=>({type:DECREMENT,data:value})