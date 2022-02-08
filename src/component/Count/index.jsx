import React, { Component } from 'react';
import './Count.css'
import { Button, Select } from 'antd';
const { Option } = Select;

export default class Count extends Component {
    state = {
        total: 0,
        SelectValue: 1
    }
    handleChange = SelectValue => this.setState({ SelectValue })
    Increase = () => {
        // 加法   
        const { total, SelectValue } = this.state
        this.setState({ total: (total + SelectValue * 1) })
    }
    Decrease = () => {
        // 减法
        const { total, SelectValue } = this.state
        this.setState({ total: (total - SelectValue * 1) })
    }
    IncreaseOfOdd = () => {
        // 奇数加1
        const { total, SelectValue } = this.state
        if (total % 2 !== 0) {
            this.setState({ total: (total + SelectValue * 1) })

        }
    }
    IncreaseAsync = () => {
        // async加
        const { total, SelectValue } = this.state
        setTimeout(() => {
            this.setState({ total: (total + SelectValue * 1) })
        }, 1000);


    }
    render() {
        const { total } = this.state
        return (
            <center style={{ marginTop: '300px' }}>
                <span>现在结果是:{total}</span>
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
                <Button onClick={this.Increase}>+1</Button>
                <Button onClick={this.Decrease}>-1</Button>
                <Button onClick={this.IncreaseOfOdd}>得数奇数+1</Button>
                <Button onClick={this.IncreaseAsync}>async+1</Button>
            </center>
        )
    }
}
