import React from 'react'
import GratefulForm from '../components/GratefulForm'

function GratefulPage(props) {
    return (
    <div className="container lg-3">
        <div className="row justify-content-md-center">
            <div className="col col-lg-4">
                <h2>Gratefruit</h2>
            </div>

        </div>
        <div className="row justify-content-md-center">
            <div className="col col-lg-4">
                <p>What are you grateful for today?</p>
                <GratefulForm items="3" />
            </div>
        </div>
    </div>
    );
}

export default GratefulPage