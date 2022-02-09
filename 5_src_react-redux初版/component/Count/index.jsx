import React, { Component } from 'react';
import { Button, Select } from 'antd';

import './Count.css'

const { Option } = Select;
export default class Count extends Component {
    state = {
        c: 1
    }

    // handleChange = c => this.setState({ c })
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

        // Store.dispatch(CreateIncreaseAsync(SelectValue * 1, 500))
    }
    render() {
        console.log(this.props);
        return (
            <center style={{ marginTop: '300px' }}>
                <span>现在结果是:{this.props.count}</span>
                <br />
                <br />
                <Select
                    defaultValue="1"
                    style={{ width: 80 }}
                    onChange={c => this.setState(c)}>
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
