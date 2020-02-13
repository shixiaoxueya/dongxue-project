// 此文件是整个redux中最为核心的文件


// 引入createStore  用于创建一个store对象
//applyMiddleware一个中间件 用来执行thunk
import {createStore,applyMiddleware} from 'redux'
//引入reducer 用于操作状态
// import countReducer from '../redux/reducers/count_reducer'

//引入reducer汇总
import reducer from '../redux/reducers/index'



//引入redux-thunk用于异步编程
import thunk from 'redux-thunk'

//调用createStore  必须传入一个reducer

export default createStore(reducer,applyMiddleware(thunk))
