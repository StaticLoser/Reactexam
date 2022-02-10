import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { CreateAddPerson } from '@action/person'
class Person extends Component {
  add = () => {
    const obj = { id: nanoid(), name: this.namenode.state.value, age: this.age.state.value }
    this.props.Add(obj)
    this.namenode.state.value = ''
    this.age.state.value = ''
    console.log(this.props.rens);
  }
  // 外部回调
  getage = (age) => {
    this.age = age
  }

  render() {
    console.log(this.props)
    return (
      <center>
        <br />
        {/* 内部回调 */}
        <h1>求和总数：{this.props.total}</h1>
        姓名：<Input ref={c => this.namenode = c} style={{ width: '150px' }} />
        <br />
        <br />
        年龄：<Input ref={this.getage} style={{ width: '150px' }} />
        <br />
        <Button onClick={this.add}>添加</Button>
        <>
          {
            this.props.personList.map((item) => {
              return (<p key={item.id}>{item.name}--{item.age}</p>)
            })
          }
        </>
      </center>
    )
  }
}
export default connect(
  state => ({
    personList: state.rens,
    total: state.he
  }),
  ({
    Add: CreateAddPerson
  })
)(Person)