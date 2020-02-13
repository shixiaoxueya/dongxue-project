import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))
// redux页面不会自动更新
// store.subscribe(()=>{
//     ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// })