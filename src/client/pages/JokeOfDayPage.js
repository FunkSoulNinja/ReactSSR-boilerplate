import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getJoke } from '../actions';

class JokeOfDay extends Component {
    componentDidMount() {
        this.props.getJoke();
    }
    render() {
        return (
            <div>
                <p>Joke: {this.props.joke}</p>
            </div>
        );
    }
}
const mapStateToProps = ({ joke }) => ({ joke });

export function loadData(store) {
    return store.dispatch(getJoke());
}

export default {
    component: connect(mapStateToProps, { getJoke })(JokeOfDay),
    loadData
};
