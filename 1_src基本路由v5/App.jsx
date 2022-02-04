import React, { Component } from 'react'
import {NavLink,Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Hello from './component/Hello'
import Show from './component/Show/Show'
import NavLinks from './component/NavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                {/* <Link to='/hello' >你好</Link> &nbsp;
                <Link to='/show' >show</Link> */}
                    <NavLinks to='/hello'>你好</NavLinks> &nbsp;|&nbsp;
                    <NavLinks to='/show'>show</NavLinks>

                    {/* <NavLink className={({isActive})=>"niude "+(isActive?'acti':'')} to='/'>你好</NavLink> | &nbsp;
                    <NavLink  className={({isActive})=>"niude "+(isActive?'acti':'')} to='/show'>展示</NavLink> */}
                    {/* <Switch> */}
                        {/* v6以下的引用 */}
                        {/* <Route path='/' component={Hello}></Route> */}

                        <Route path='/hello' component={Hello}/>
                        <Route path='/show' component={Show}/>
                        <Redirect to='/show' />
                    {/* </Switch> */}

                </BrowserRouter>

            </div>
        )
    }
}