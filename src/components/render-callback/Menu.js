import React from 'react';
import ToggleableMenu from './ToggleableMenu';

const Menu = () => (
    <div>
        <ToggleableMenu title="First menu">
            <p>some content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Second menu">
            <p>another content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Third menu">
            <p>more content</p>
        </ToggleableMenu>
    </div>
);