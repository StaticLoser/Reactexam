// 该文件用于暴露一个store对象

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import countRedcuer from './redcuer/count'

export default createStore(countRedcuer, applyMiddleware(thunk))