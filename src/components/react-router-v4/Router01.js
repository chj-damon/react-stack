import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

// Route 路由的三种写法。
export default () => <Router>
    <div>
        <Route exact path="/" component={Home} />
        {/* strict 约束路径必须完全匹配，否则组件将不会渲染。 */}
        <Route strict path="/about/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/user" render={() => <h1>User</h1>} />
        {/* match 参数在 children/render/component 三种方式中都可以获取到。 */}
        <Route path="/test" children={({ match }) => {
            console.log(match); // 如果路由匹配未成功，则 match 为 null
            return match && <h1>Test</h1>
        }} />
    </div>
</Router>;