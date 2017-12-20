import React, { PureComponent } from 'react';
import ToggleableMenu from './ToggleableMenu';

class Menu extends PureComponent {
    render() {
        return (
            <div>
                <ToggleableMenu title="First menu">
                    <p>Some content</p>
                </ToggleableMenu>
                <ToggleableMenu title="Second menu">
                    <p>Another content</p>
                </ToggleableMenu>
                <ToggleableMenu title="Third menu">
                    <p>More content</p>
                </ToggleableMenu>
            </div>
        )
    }
}
export default Menu;