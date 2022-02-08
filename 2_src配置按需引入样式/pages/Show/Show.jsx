import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import index from './index.module.css'
import News from './News'
import Message from './Message'
import NavLinks from '../../component/NavLink'
export default class Show extends Component {
  render() {
    return <div className={index.show}>
      <h1>我是 Show</h1>
      <NavLinks to='/show/news'>新闻</NavLinks> &nbsp; | &nbsp;
      <NavLinks to='/show/message'>消息</NavLinks>
      <Switch>

        <Route path='/show/news' component={News}></Route>
        <Route path='/show/message' component={Message}></Route>
        <Redirect to='/show/news'></Redirect>
      </Switch>
    </div>;
  }
}
