import React, { PureComponent } from 'react';

function makeToggleable(Clickable) {
    return class extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                show: false
            };
        }

        toggle = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            return (
                <div onClick={this.toggle}>
                    <Clickable 
                        {...this.props}
                    />
                    {this.state.show && this.props.children}
                </div>
            )
        }
    }
}
export default makeToggleable;