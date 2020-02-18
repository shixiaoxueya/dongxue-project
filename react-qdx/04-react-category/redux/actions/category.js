//引入
import {GET_CATEGORY_LIST} from '../action-type'
import {reqCategoryList} from '../../api/index'
import {message} from 'antd'

//同步action
const createGetCategoryAction = (categoryList)=>({type:GET_CATEGORY_LIST,data:categoryList})


//异步action
export const createGetCategoryAsynAction = () =>{
    return async(dispath)=>{

        let result = await reqCategoryList()

        const {status,data,msg} = result

        if(status === 0){
            dispath(createGetCategoryAction(data.reverse()))
        }else{
            message.error(msg)
        }

        
    }
}
