import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <p>Universal React Boilerplate by Anthony Falcon</p>
            </div>
        );
    }
}

export default {
    component: Home
};
