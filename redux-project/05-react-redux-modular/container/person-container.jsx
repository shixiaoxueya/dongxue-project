//该文件是person组件的容器组件,用于给person组件传递, 状态  和操作状态的方法

//引入UI
import Person from '../components/person'
//引入connect
import {connect} from 'react-redux'
//引入action
import {createAddPersonActon} from '../redux/action-creators/person-action-creator'

export default connect(
    (state)=>({
        persons:state.persons,
        number:state.number
    }),//映射状态 --若没有可以传的东西,那么返回空对象
    {addPerson:createAddPersonActon}//映射操作状态的方法  --若没有可以传的东西,那么写空对象
)(Person) 