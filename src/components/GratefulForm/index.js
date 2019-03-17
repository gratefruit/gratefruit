import React, { useState } from 'react'
import SuccessfulSubmit from './SuccessfulSubmit'

function GratefulInputItems(props) {
    const items = props.items || []

    return items.map((item, index) => {
        return <li key={index} className="list-group-item grateful-input-group">
            <input name={index} className="form-control"
                id={`item-${index}`}
                onChange={props.onChange(index, item)} 
                onKeyPress={props.onKeyPress(index)}
                value={item} />
        </li>
    })
}

function GratefulForm(props) {
    const [inputs, setInputs] = useState(Array.from({ length: props.items }, () => ""))
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [completed, setCompleted] = useState(false)

    function inputChangedHandler(index) {
        return (event) => {
            const newInputs = inputs.map((input, currentIndex) => {
                if (index !== currentIndex) return input;
                return event.target.value
            });

            if (newInputs.filter((input) => input.length > 0).length === newInputs.length) {
                setSaveEnabled(true)
            }
            else {
                setSaveEnabled(false)
            }

            setInputs(newInputs)
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault()

        setCompleted(true)
    }

    const handleInputKeyPress = (index) => event => {
        if (event.key === 'Enter') {
            if (props.items - 1 > index) {
                // Todo: Do this through refs
                document.getElementById(`item-${index + 1}`).focus()
            }
        }
    }


    return (
        <div>
            <h4>Today, I'm grateful for:</h4>
            {
            (!completed) ? 
                <form onSubmit={handleFormSubmit}>
                    <ul className="list-group list-group-flush grateful-input-list">
                        <GratefulInputItems 
                            items={inputs} 
                            onChange={inputChangedHandler} 
                            onKeyPress={handleInputKeyPress} />
                    </ul>
                    <p className="form-group">
                        <button className="btn btn-primary btn-lg btn-block" disabled={!saveEnabled} type="submit">Save</button>
                    </p>
                    
                </form>
            :
                <SuccessfulSubmit name="Joe" />
            }
        </div>
    )

}

export default GratefulForm