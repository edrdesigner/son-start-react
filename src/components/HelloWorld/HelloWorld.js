import React, { Component } from 'react';
import StateInput from '../StateInput/StateInput';



class HelloWorld extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Edu',
            txt: this.props.txt
        }

        
    }

    render() {
        const style =  {
            color: '#ff0055',
            fontSize: 50,
            backgroundColor: '#000'
        }

        return (
            <div className="h1">
                { /* Comentario */ }
                <h1 style={ style }>{ this.state.txt }</h1>
                <span>{this.state.name}</span>
                <StateInput />
            </div>
        );
    }
}

export default HelloWorld;