// 该文件用于暴露一个store对象

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import countRedcuer from './cont_redcuer'

export default createStore(countRedcuer, applyMiddleware(thunk))