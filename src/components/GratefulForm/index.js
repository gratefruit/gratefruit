import React, { useState } from 'react'
import SuccessfulSubmit from './SuccessfulSubmit'
import GratefulInputItems from './GratefulInputItems'

function GratefulForm(props) {
    const [inputs, setInputs] = useState(Array.from({ length: props.items }, () => ""))
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [activeIndex, setActiveInput] = useState(0)

    function inputChangedHandler(event, index) {
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

    function handleFormSubmit(event) {
        event.preventDefault()

        setCompleted(true)
    }

    const handleInputKeyPress = (index) => event => {
        if (event.key === 'Enter') {
            const newInputs = inputs.map((input, currentIndex) => {
                if (index !== currentIndex) return input;
                return event.target.value
            });

            setInputs(newInputs)

            if (index < inputs.length) {
                setActiveInput(activeIndex + 1)
            }
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
                        {inputs && inputs.map((input, index) => (
                            <GratefulInputItems
                                index={index}
                                key={index}
                                item={input}
                                active={activeIndex}
                                onChange={inputChangedHandler}
                                onKeyPress={handleInputKeyPress} />
                        ))}
                        {
                            (saveEnabled) ?
                                <p className="form-group">
                                    <button className="btn btn--primary" type="submit">Save</button>
                                </p>
                                :
                                <p className="form-group">
                                    <button className="btn btn--secondary" type="button" onClick={handleNextButton} >Next</button>
                                </p>
                        }


                    </form>
                    :
                    <SuccessfulSubmit name="Joe" items={inputs} />
            }
        </div>
    )

}

export default GratefulForm
