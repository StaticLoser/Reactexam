/*
    1.该文件用于创建一个Count组件服务的reducer,
    2. refucer函数会接到两个参数 (之前的状态(perstste),动作对象(action))
 */
import { Increase, Decrease } from './constant'
export default function countRedcuer(perstste = 0, action) {
    const { type, data } = action
    switch (type) {
        case Increase:
            return perstste + data
        case Decrease:
            return perstste - data        
        case 'IncreaseAsync':
            return perstste + data
        default:
            return perstste
    }
}