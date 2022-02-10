
// 该文件是为Count组件生成action对象
import { Increase, Decrease } from '../constant'
// 同步action
export const CreateIncrease = data => ({ type: Increase, data })
export const CreateDecrease = data => ({ type: Decrease, data })

// 异步action
export const CreateIncreaseAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(CreateIncrease(data))
        }, time);
    }
}