import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const style =  {
            color: '#ff0055',
            fontSize: 50,
            backgroundColor: '#000'
        }

        return (
            <div className="h1">
                { /* Comentario */ }
                <h1 style={ style }>Hello World</h1>
            </div>
        );
    }
}

export default HelloWorld;