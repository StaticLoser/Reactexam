import React, { Component } from 'react'
import Store from './redux/store'
import Count from './containers/Count'
  
export default class App extends Component {
    render() {        
        return (
            <div>
              <Count store={Store}/>
            </div>
        )
    }
}