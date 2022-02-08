import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageList: [
      { ID: 1, TITLE: '你好中国' }, { ID: 2, TITLE: '你好匈牙利' }, { ID: 3, TITLE: '你好麦加利' }
    ]
  }
  render() {
    const { messageList } = this.state
    return (
      <div>

        {
          messageList.map((item) => {
            return (
              <span key={item.ID}>
                <Link to={`/show/message/${item.ID}`}>{item.TITLE}</Link>&nbsp;
              </span>
            )
          })
        }
        <br />
        <Route path='/show/message/:id' component={Detail} />

      </div>
    )
  }
}
