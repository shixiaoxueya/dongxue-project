import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'



ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// redux页面不会自动更新
store.subscribe(()=>{
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})