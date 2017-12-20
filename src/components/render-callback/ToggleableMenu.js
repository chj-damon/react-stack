import React from 'react';
import Toggleable from './Toggleable';

const ToggleableMenu = props => (
    <Toggleable>
        {
            (show, onClick) => (
                <div>
                    <div onClick={onClick}>
                        <h1>{props.title}</h1>
                    </div>
                    { show && props.children }
                </div>
            )
        }
    </Toggleable>
);
export default ToggleableMenu;