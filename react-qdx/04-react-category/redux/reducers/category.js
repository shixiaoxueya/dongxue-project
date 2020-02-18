import {GET_CATEGORY_LIST} from '../action-type'



export default function (preState=[],action){
    const {type,data} = action
    let newState
    switch (type) {
        case GET_CATEGORY_LIST:
            newState = data
            return newState
        
        default:
            return preState
    }
}