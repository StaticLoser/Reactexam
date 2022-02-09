// 引入ui组件
import ConuntUI from '../../component/Count'
import { connect } from 'react-redux'
import { CreateIncrease, CreateDecrease, CreateIncreaseAsync }
    from '../../redux/count_actions'
// 传递给ui --状态
function mapStateToProps(state) {
    return { count: state }
}
// 传递给ui--方法
function mapDispatchToProps(dispatch) {
    return {
        Increase: (data) => { dispatch(CreateIncrease(data)) },
        Decrease: (data) => { dispatch(CreateDecrease(data)) },
        IncreaseAsync: (data, time) => { dispatch(CreateIncreaseAsync(data, time)) }
    }
}
// 创建并暴露容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ConuntUI)
