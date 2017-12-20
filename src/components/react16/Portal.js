import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                {
                    ReactDOM.createPortal(
                        <div>portal</div>,
                        document.getElementById('portal')
                    )
                }
            </div>
        );
    }
}
export default Portal;