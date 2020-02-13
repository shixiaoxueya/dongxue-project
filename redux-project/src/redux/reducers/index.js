//该文件用于汇总所有的reducer
import countReducer from './count_reducer'
import personReducer from './person-reducer'


//combineReducers用于合并多个reducer,最总生成一个总的reducer
import {combineReducers} from 'redux'

// combineReducers传入的对象就是redux帮我们保存到的那个状态对象
export default combineReducers({
    number:countReducer,
    persons:personReducer
})