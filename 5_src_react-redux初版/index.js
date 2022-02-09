import React from 'react'
import reactDOM from 'react-dom'
import App from './App.jsx'
import store from './redux/store'
reactDOM.render(
    <App />,
    document.getElementById('root')
)

store.subscribe(() => {
    reactDOM.render(
        <App />,
        document.getElementById('root')
    )
})