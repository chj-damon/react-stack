import React, { PureComponent } from 'react';
import makeToggleable from './makeToggleable';

class ToggleableMenu extends PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default makeToggleable(ToggleableMenu);