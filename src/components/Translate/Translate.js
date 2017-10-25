import React, { Component } from 'react';

class Translate extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            txt_to_translate: '',
            txt_translated:  ''
        }

        this.updateInput = this.updateInput.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    updateInput(e) {
        return this.setState({
            txt_to_translate: e.target.value
        })
    }

    handleClick() {
		fetch('http://localhost:9000/translate', {
			method: 'POST',
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: this.state.text_to_translate,
				to: 'en'
			})
		})
		.then((response) => response.json())
		.then((data) => {
			this.setState({
				txt_translated: data.text
			})
		})
	}

    render() {
        return (
            <div>
                 <input type="text" name="txt_to_translate" value={ this.state.txt_to_translate } onChange={ this.updateInput} />
                 <button type="button" onClick={ this.handleClick} >Translate</button>
                 <hr />
                 <p>{ this.state.txt_translated }</p>
            </div>
        );
    }
}

export default Translate;