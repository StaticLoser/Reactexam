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
\*Message中:
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
```
\*Detail中：
```
 const { id } = this.props.match.params
```
