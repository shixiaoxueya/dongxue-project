//该文件用于创建action对象

import {ADDPERSON} from '../action-types'

export const createAddPersonActon =(personObj) =>({type:ADDPERSON,data:personObj})