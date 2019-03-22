import React from 'react'
import GratefulForm from '../components/GratefulForm'

function GratefulPage(props) {
    return (
    <div className="group">

        <h2>Gratefruit</h2>

        <div>
            <p>What are you grateful for today?</p>
            <GratefulForm items="3" />
        </div>

    </div>
    );
}

export default GratefulPage