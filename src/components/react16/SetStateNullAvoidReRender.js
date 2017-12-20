import React from 'react';

class CityMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000);
    }
    componentWillReceiveProps() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        const location = this.props.city === 'Hangzhou' ? '120.168457,30.268556' : '116.408386,39.904469';
        const map = `http://restapi.amap.com/v3/staticmap?location=${location}&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=d565be0f6d2c9b6abf41b2b289ff6386`;
        return (
            <div>
                <img src={map} width={750} height={300} alt={this.props.city} />
            </div>
        );
    }
}

/**
 * 在 setState 中用 null 来避免不必要地渲染
 */
class SetStateNullAvoidReRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Hangzhou'
        };
    }

    /**
     * 将 state 设置为 null 可以防止重新渲染
     */
    selectCity = (e) => {
        const newValue = e.target.value;
        this.setState(prevState => {
            if (prevState.city === newValue) {
                return null;
            }
            return { city: newValue };
        });
    }

    render() {
        return (
            <React.Fragment>
                <button value="Hangzhou" onClick={this.selectCity}>Hangzhou</button>
                <button value="Beijing" onClick={this.selectCity}>Beijing</button>
                <CityMap city={this.state.city} />
            </React.Fragment>
        );
    }
}

export default SetStateNullAvoidReRender;