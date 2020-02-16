import React, { Component } from 'react';
import login from './container/login/login'
import Admin from './container/admin/admin'
import {Route,Switch,Redirect} from 'react-router-dom'
// import { render } from '@testing-library/react';
// import Demo from './container/demo/demo'
// import Check from './container/check/check'




export default class App extends Component {
  render(){
    return (
     <Switch>               
        <Route path="/login" component={login}/>
        <Route path="/admin" component={Admin}/>
        <Redirect to="login"/>
      </Switch>
      // <div>
      //   <NewDemo style={{color:'blue'}}/>
      // </div> 
    );
  }
}



//装饰器语法
//情况一:装饰器函数没有return(必须是程序员写代码的return)
/* function demo(target){
  target.a=1
  target.b=2
}

@demo
class Mycalss{}
console.log(Mycalss.a,Mycalss.b); */

//相当与
/* class Mycalss{}
demo(Mycalss) */


//情况二:装饰器函数有返回值
/* function demo (target){
  target.a=1
  target.b=2
  return 100
} */
//使用装饰器语法,
/* @demo
class Mycalss{} */
//会被翻译成
/* class Mycalss{}
Mycalss = demo(Mycalss)
console.log(Mycalss); */

//情况三:装饰器函数是另一个函数的返回值
/* function test(){
  function demo(target){
    target.a=1
    target.b=2
    return target
  }
  return demo
} */
/* let obj={m:0}
test()(obj)
console.log(obj); */

//使用装饰器语法
/* @test()
class Mycalss{}
console.log(Mycalss); */

//上方的装饰器语法会被翻译成
/* class Mycalss{}
Mycalss = test()(Mycalss)
console.log(Mycalss);
 */
