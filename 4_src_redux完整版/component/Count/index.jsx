import React, { Component } from 'react';
import { Button, Select } from 'antd';
import Store from '../../redux/store'
import './Count.css'
import { CreateIncrease, CreateDecrease, CreateIncreaseAsync }
    from '../../redux/count_actions'
const { Option } = Select;
export default class Count extends Component {
    state = {
        SelectValue: 1
    }
    componentDidMount() {
        Store.subscribe(() => {
            this.setState({})
        })
    }
    handleChange = SelectValue => this.setState({ SelectValue })
    Increase = () => {
        // 加法   
        const { SelectValue } = this.state
        Store.dispatch(CreateIncrease(SelectValue * 1))

    }
    Decrease = () => {
        // 减法
        const { SelectValue } = this.state
        Store.dispatch(CreateDecrease(SelectValue * 1))
    }
    IncreaseOfOdd = () => {
        // 奇数加1

        const { SelectValue } = this.state
        if (Store.getState() % 2 !== 0) {
            Store.dispatch(CreateIncrease(SelectValue * 1))
        }
    }
    IncreaseAsync = () => {
        // async加
        const { SelectValue } = this.state
        Store.dispatch(CreateIncreaseAsync(SelectValue * 1, 500))
    }
    // console.log();
    render() {
        const { total } = this.state
        return (
            <center style={{ marginTop: '300px' }}>
                <span>现在结果是:{Store.getState()}</span>
                <br />
                <br />
                <Select
                    defaultValue="1"
                    style={{ width: 80 }}
                    onChange={this.handleChange}>
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
