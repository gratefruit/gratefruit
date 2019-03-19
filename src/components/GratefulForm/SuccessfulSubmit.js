import React from 'react'


export default function(props) {
    const items = props.items || []

    const listItems = items.map((gratitude, index) => <li key={index} >{gratitude}</li>)

    return (
        <div>
            Well done {props.name}

            <ul>
                {listItems}
            </ul>
        </div>
    )
}