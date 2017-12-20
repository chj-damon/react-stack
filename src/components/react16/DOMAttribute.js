import React from 'react';

/**
 * react16现在支持自定义属性了，但是自定义属性的值一定是能够转成字符串的。所以不能是一个函数（虽然还是也可以 toString）。
 * 如果不能转成字符串，那么 react 会自动忽略这个自定义属性。
 * 所以，事件必须是传入一个函数而不能是字符串。
 */
class DOMAttribute extends React.Component {
    getSelfAttribute = (e) => {
        console.log(e.target.getAttribute('my-attribute'));
    }
    render() {
        return (
            <button my-attribute="123" tabIndex="1" className="hello" onClick={this.getSelfAttribute}>DOM Attribute</button>
        );
    }
}

export default DOMAttribute;