//引入
import {SAVE_HEADER_TITLE,DELETE_HEADER_TITLE} from '../action-type'

//两件事 一个是action  一个是localStorage


export const createSaveTitleAction = (title) =>({type:SAVE_HEADER_TITLE,data:title})
//清除       
export const createDeleteTitleAction =()=>({type:DELETE_HEADER_TITLE,data:''})