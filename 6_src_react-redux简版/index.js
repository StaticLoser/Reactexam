import React from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store'
reactDOM.render(
    <Provider store={store}>

        <App />
    </Provider>,
    document.getElementById('root')
)

// store.subscribe(() => {
//     reactDOM.render(
//         <App />,
//         document.getElementById('root')
//     )
// })