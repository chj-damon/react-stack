import React from 'react';
import ReactDOM from 'react-dom';
import './overlay.css';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillUnmount() {
        document.body.removeChild(this.container);
        this.container = null;
    }

    render() {
        return ReactDOM.createPortal(
            <div className="overlay">
                <span className="overlay-close" onClick={this.props.onClose}>
                    &times;
                </span>
                {this.props.children}
            </div>,
            this.container
        )
    }
}

class OverlayDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayActive: true
        }
    }

    overlayClose = () => {
        this.setState({
            overlayActive: false
        });
    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                {
                    this.state.overlayActive &&
                        <Overlay onClose={this.overlayClose}>overlay content</Overlay>
                }
            </div>
        );
    }
}

export default OverlayDemo;