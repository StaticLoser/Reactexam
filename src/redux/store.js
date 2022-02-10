// 该文件用于暴露一个store对象

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import countRedcuer from '@redcuer/count'
import personRedcuer from '@redcuer/person'
import { composeWithDevTools } from 'redux-devtools-extension'
const allRedcuer = combineReducers({
    he: countRedcuer,
    rens: personRedcuer
})

export default createStore(
    allRedcuer
    , composeWithDevTools(applyMiddleware(thunk)))