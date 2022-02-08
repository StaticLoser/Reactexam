### react-router-dom v5

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

  




