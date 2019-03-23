import React, { useState, useEffect } from 'react'
import { auth as firebaseAuth } from 'firebase'
import firebase from '../../firebase'

let recaptchaVerifier;


function PhoneNumberSuccess(props) {
  return (
    <div>
      Success
    </div>
  )
}

export default function(props) {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirmationResult, setConfirmationResult] = useState(null)
    const [code, setCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
      recaptchaVerifier = new firebaseAuth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible'
      });
    })

    function isPhoneNumberValid(phoneNumber) {
      var pattern = /^\+[0-9\s\-\(\)]+$/;
      return phoneNumber.search(pattern) !== -1;
    }

    function onSubmitPhone(e) {
        e.preventDefault()
        if (!isPhoneNumberValid(phoneNumber)) {
          return setErrorMessage('Phone number is not valid')
        }

        firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
          .then((confirmation) => {
            // SMS Sent
            setConfirmationResult(confirmation)
          })
          .catch((error) => {
            // SMS not sent
            console.error(error)
          })
    }

    function onSubmitCode(e) {
      e.preventDefault()
      confirmationResult.confirm(code).then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    return (
      <div>
        {
          (confirmationResult === null) ?
            <form onSubmit={onSubmitPhone}>
                <input
                    type="tel"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    className="form-input fs16 bg-white c-gold mb-"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    /> <span hidden={errorMessage === ''} style={{ "color": "red" }}>{errorMessage}</span>
                <button id="sign-in-button" className="btn btn--primary">Request Code</button>
            </form>
            :
            <form>
                <p class="mb- c-gold fs16">{phoneNumber}</p>
                <input type="number" placeholder="Code.." className="form-input fs16 bg-white c-gold mb-" value={code} onChange={(e) => setCode(e.target.value)} />
                <button type="submit" className="btn btn--primary" onClick={ onSubmitCode }>Confirm Code</button>

                {
                  (user) && <PhoneNumberSuccess user={user} />
                }
            </form>
        }

        <div id="recaptcha" />
      </div>

    )
}
