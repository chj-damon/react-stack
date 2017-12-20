import React, { PureComponent, Fragment } from 'react';

class MultipleElementsWithoutWrapper extends PureComponent {
    render() {
        return (
            <Fragment>
                <div>this is a div</div>
                <h2>this is a h2. and it is a sibling elment of div.</h2>
            </Fragment>
        );
    }
}
export default MultipleElementsWithoutWrapper;