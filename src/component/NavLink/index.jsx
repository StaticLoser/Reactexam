import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
export default class NavLinks extends Component {
    render() {
        return (
            <NavLink className={({ isActive }) => "niude " + (isActive ? 'acti' : '')}  {...this.props} />
        )
    }
}
