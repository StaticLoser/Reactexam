import React, { Component } from 'react'
import {NavLink, Link, Route, Routes,HashRouter as Router  } from 'react-router-dom'

import Hello from './component/Hello'
import Show from './component/Show/Show'
import NavLinks from './component/NavLink'
import './App.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* <a href='https://www.baidu.com'>你好</a> | &nbsp; */}
                    <NavLinks to='/'>你好</NavLinks> &nbsp;|&nbsp;
                    <NavLinks to='/show'>show</NavLinks>
                    {/* <NavLink className={({isActive})=>"niude "+(isActive?'acti':'')} to='/'>你好</NavLink> | &nbsp;
                    <NavLink  className={({isActive})=>"niude "+(isActive?'acti':'')} to='/show'>展示</NavLink> */}
                    <Routes>
                        {/* v6以下的引用 */}
                        {/* <Routes path='/' component={Hello}></Routes> */}

                        <Route path='/' element={<Hello />}></Route>
                        <Route path='/show' element={<Show />}></Route>
                    </Routes>

                </Router>

            </div>
        )
    }
}