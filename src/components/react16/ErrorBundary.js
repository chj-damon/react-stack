import React, { Component } from 'react';

const Profile = ({ user }) => (<div>{user.name}</div>);

class ErrorBundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'chenjie'
            },
            hasError: false
        };
    }

    handleClick = () => {
        this.setState({
            user: null
        });
    }

    // react16 提供的一个新的生命周期，用来捕获组件中的异常
    componentDidCatch(err, info) {
        console.log(err, info); // 错误提示信息可以打印出来。如果是上线了，那么可以调用统一的异常处理接口
        this.setState({
            hasError: true
        });
    }

    render() {
        // 如果发生了异常，则渲染一个异常的提示
        if (this.state.hasError) {
            return (<div>Oops, something went wrong!</div>)
        }
        return (
            <div>
                {/* 注意：如果是直接写成<Profile name={this.state.user.name} />那么componentDidCatch不会执行 */}
                <Profile user={this.state.user} />
                <button onClick={this.handleClick}>Update</button>
            </div>
        );
    }
}

export default ErrorBundary;