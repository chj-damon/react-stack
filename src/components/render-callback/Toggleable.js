import React, { PureComponent } from 'react';

class Toggleable extends PureComponent {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return this.props.children(this.state.show, this.toggle);
    }
}
export default Toggleable;