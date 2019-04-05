import React, { useState } from 'react'
import SuccessfulSubmit from './SuccessfulSubmit'

function GratefulInputItems(props) {
    const items = props.items || []
    const active = props.active || 0

    return items.map((item, index) => {
        return <li key={index}
            hidden={(index !== active)}
            className="list-item list-item--input mt- mb-">
            <textarea
                name={index}
                className="form-input form-input-textarea fs16 bg-white c-gold"
                id={`item-${index}`}
                placeholder="Today I'm grateful for..."
                onChange={props.onChange(index, item)}
                onKeyPress={props.onKeyPress(index)}
                ref={input => input && input.focus()}
                value={item} />
        </li>
    })
}

function GratefulForm(props) {
    const [inputs, setInputs] = useState(Array.from({ length: props.items }, () => ""))
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [activeIndex, setActiveInput] = useState(0)

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

            if (index < inputs.length) {
                setActiveInput(activeIndex + 1)
            }

            event.preventDefault()
        }
    }

    const handleNextButton = (event) => {
        if (activeIndex < inputs.length) {
            setActiveInput(activeIndex + 1)
        }
    }


    return (
        <div>
            {
                (!completed) ?
                    <form onSubmit={handleFormSubmit}>
                        <GratefulInputItems
                            items={inputs}
                            active={activeIndex}
                            onChange={inputChangedHandler}
                            onKeyPress={handleInputKeyPress} />

                        {
                            (saveEnabled) ?
                                <p className="form-group">
                                    <button className="btn btn--primary" type="submit">Next</button>
                                </p>
                                :
                                <p className="form-group">
                                    <button className="btn btn--secondary" type="button" onClick={handleNextButton} >Next</button>
                                </p>
                        }


                    </form>
                    :
                    <SuccessfulSubmit onComplete={props.onComplete} name="Joe" items={inputs} />
            }
        </div>
    )

}

export default GratefulForm
