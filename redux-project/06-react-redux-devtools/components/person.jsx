import React, { Component } from 'react'

export default class Person extends Component {

    // 添加
    add=()=>{
        // 获取用户的输入
        const name = this.refs.name.value
        const age = this.refs.age.value*1
        //操作状态
        this.props.addPerson({name,age})
        //清空
        this.refs.name.value=''
        this.refs.age.value=''
    }
    render() {
        return (
            <div>
                <h2>当前的人name数为:{this.props.persons.length},上方组件的计数结果为:{this.props.number}</h2>
                <input ref="name" type="text" placeholder="请输入您的姓名"/>&nbsp;&nbsp;&nbsp;
                <input ref="age" type="text" placeholder="请输入您的年龄"/>&nbsp;&nbsp;&nbsp;
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.persons.map((personObj,index)=>{
                        return <li key={index}>姓名:{personObj.name} &nbsp; 年龄:{personObj.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}
