## react-router-dom v5

```
    import { Link, Route, Routes,HashRouter as Router  } from 'react-router-dom'
    <Router>
        {/* <a href='https://www.baidu.com'>你好</a> | &nbsp; */}
        <Link to='/' value='你好'>你好</Link> | &nbsp;
        <Link to='/show'>展示</Link>
        <Routes>
            {/* v6以下的引用 */}
            {/* <Routes path='/' component={Hello}></Routes> */}

            <Route path='/' element={<Hello />}></Route>
            <Route path='/show' element={<Show />}></Route>
        </Routes>

    </Router>
```

### 封装Navlink 
#### 在NavLinks组件中

```
    import React, { Component } from 'react';
    import { NavLink } from 'react-router-dom'
    export default class NavLinks extends Component {
        render() {
            return (
                <NavLink className={({ isActive }) => "niude " + (isActive ? 'acti' : '')}  {...this.props} />
            )
        }
    }

```
#### 在app里

```
    <NavLinks to='/'>你好</NavLinks> &nbsp;|&nbsp;
    <NavLinks to='/show'>show</NavLinks>
```

### Routers(v6) & Switch 

```
Switch等价于Routers
```


### 创建一个typescript的模板项目
```

create-react-app [project_name]  --template typescript
```


### 路由组件通信
#### params传参
<font color='red'>\*</font>Message中:

```

{
    messageList.map((item) => {
    return (
        <span key={item.ID}>
        <Link to={`/show/message/${item.ID}`}>{item.TITLE}</Link>&nbsp;
        </span>
    )
    })
}
<Route path='/show/message/:id' component={Detail} />
```
<font color='red'>\*</font>Detail中：

```
 const { id } = this.props.match.params

```

### antd 样式按需引入 v4x

#### 1 安装react-app-rewired customize-cra
```
npm i react-app-rewired customize-cra
```
#### 2修改启动打包配置
```
//改成
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test"
  },
```
#### 3安装babel
```
npm i babel-plugin-import
```
#### 4 在项目根目录创建一个 config-overrides.js 用于修改默认配置。
```
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
```
#### 5 去掉antd样式引入
<font color='red'>-</font>  ``` import 'antd/dist/antd.css'; ```


## Redux
### 1.下载Redux
```
npm install --save redux
```

### 2.创建redux文件夹 添加store.js & reduxer.js
<font color='red'>+</font> store.js<br/>
<font color='red'>+</font> reduxer.js

### 3.store.js
```
// 该文件用于暴露一个store对象

import { createStore } from 'redux';

import countRedcuer from './cont_redcuer'

export default createStore(countRedcuer)
```
### 4.创建reducer
```
/*
    1.该文件用于创建一个Count组件服务的reducer,
    2. refucer函数会接到两个参数 (之前的状态(perstste),动作对象(action))
 */

export default function countRedcuer(perstste = 0, action) {
    const { type, data } = action
    switch (type) {
        case 'increment':
            return perstste + data
        case 'decrement':
            return perstste - data
        default:
            return perstste
    }
}
```
### 5.在index.jsx里
```
import Store from '../../redux/store'
```
####  5.1获取store默认值
```
Store.getState()
```
#### 5.2异步action
```
 npm i redux-thunk --save
 // store.js 改成
 import thunk from 'redux-thunk'
 export default createStore(countRedcuer, applyMiddleware(thunk))
```

## react-redux

### 安装react-redux
```
npm i --save react-redux
```
### file
```
+contains
    +Count
        index.jsx (存放容器组件)
删除一切ui组件里的store 在父组件传递props 把store传递进去        
```
#### 容器组件
```
// 引入ui组件
import ConuntUI from '../../component/Count'
import { connect } from 'react-redux'
import { CreateIncrease, CreateDecrease, CreateIncreaseAsync }
    from '../../redux/count_actions'
// 传递给ui --状态
function mapStateToProps(state) {
    return { count: state }
}
// 传递给ui--方法
function mapDispatchToProps(dispatch) {
    return {
        Increase: (data) => { dispatch(CreateIncrease(data)) },
        Decrease: (data) => { dispatch(CreateDecrease(data)) },
        IncreaseAsync: (data, time) => { dispatch(CreateIncreaseAsync(data, time)) }
    }
}
// 创建并暴露容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ConuntUI)
```



