// 引入ui组件
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Button, Select } from 'antd';
import { CreateIncrease, CreateDecrease, CreateIncreaseAsync } from '../../redux/count_actions'
const { Option } = Select;



class CountUI extends Component {
    state = {
        c: 1
    }
    Increase = () => {
        // 加法   
        const { c } = this.state
        this.props.Increase(c * 1)
    }
    Decrease = () => {
        // 减法
        const { c } = this.state
        this.props.Decrease(c * 1)
    }
    IncreaseOfOdd = () => {
        // 奇数加1

        const { c } = this.state
        const { count } = this.props
        if (count % 2 !== 0) {
            this.props.Increase(c * 1)
        }
    }
    IncreaseAsync = () => {
        // async加
        const { c } = this.state
        this.props.IncreaseAsync(c * 1, 1000)
    }
    render() {
        console.log(this.props);
        return (
            <center style={{ marginTop: '300px' }}>
                <h1>现在结果是:{this.props.count}</h1>
                <br />
                <br />
                <Select
                    defaultValue="1"
                    style={{ width: 80 }}
                    onChange={c => this.setState({ c })}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                </Select>
                <Button onClick={this.Increase}>+</Button>
                <Button onClick={this.Decrease}>-</Button>
                <Button onClick={this.IncreaseOfOdd}>得数奇数+</Button>
                <Button onClick={this.IncreaseAsync}>async+</Button>
            </center>
        )
    }
}

// 创建并暴露容器组件
export default connect
    (
        state => ({ count: state }),
        // dispatch => ({
        //     Increase: (data) => { dispatch(CreateIncrease(data)) },
        //     Decrease: (data) => { dispatch(CreateDecrease(data)) },
        //     IncreaseAsync: (data, time) => { dispatch(CreateIncreaseAsync(data, time)) }
        // })
        {
            Increase: CreateIncrease,
            Decrease: CreateDecrease,
            IncreaseAsync: CreateIncreaseAsync
        }
    )(CountUI)
