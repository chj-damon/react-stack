/**
 * 处理错误的逻辑基本上是一样的，所以可以抽取出一个HOC高阶函数对组件进行统一的处理。
 * https://github.com/notgiorgi/react-error-handler-hoc
 */
import React from 'react';
import withErrorHandler from 'error-handler-hoc';
import errorCallback from './errorCallback';
import FallbackComponent from './FallbackComponent';

const Profile = ({ user }) => (<div>{user.name}</div>);

class ErrorBundaryHoc extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'chenjie'
            }
        };
    }

    handleClick = () => {
        this.setState({
            user: null
        });
    }

    render() {
        return (
            <div>
                <Profile user={this.state.user} />
                <button onClick={this.handleClick}>Update</button>
            </div>
        );
    }
}

export default withErrorHandler(errorCallback)(FallbackComponent)(ErrorBundaryHoc);