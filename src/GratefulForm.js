import React, { Component } from 'react'

class GratefulForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputs: Array.from(Array(parseInt(props.items)), () => "")
        }

        this.createChangeInputHandler = this.createChangeInputHandler.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
    }

    createChangeInputHandler(index) {
        return (event) => {
            let saveEnabled = false
            const newInputs = this.state.inputs.map((input, currentIndex) => {
                if (index !== currentIndex) return input;
                return event.target.value
            });

            if (newInputs.filter((input) => input.length > 0).length === newInputs.length) {
                saveEnabled = true
            }

            this.setState({
                inputs: newInputs,
                saveEnabled
            })
        }
    }

    inputsToList(inputs) {

        return inputs.map((item, index) => {
            return <li key={index}>
                <input name={index}
                    id={`item-${index}`}
                    onChange={this.createChangeInputHandler(index, item)} 
                    onKeyPress={this.handleInputKeyPress(index)}
                    value={item} />
            </li>
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        if (this.props.onComplete) {
            this.props.onComplete(this.state.inputs)
        }
    }

    handleInputKeyPress = (index) => event => {
        if (event.key === 'Enter') {
            if (this.props.items - 1 > index) {
                // Todo: Do this through refs
                document.getElementById(`item-${index + 1}`).focus()
            }
        }
    }
    

    render() {
        return (
            <div>
                <h4>Today, I'm grateful for:</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <ul>
                        {this.inputsToList(this.state.inputs)}
                    </ul>
                    <button disabled={!this.state.saveEnabled} type="submit">Save</button>
                </form>
            </div>
        )
    }   
}


export default GratefulForm