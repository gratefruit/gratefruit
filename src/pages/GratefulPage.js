import React, { useState, useEffect } from "react";
import firebase from '../firebase'
import GratefulForm from "../components/GratefulForm";
import PhoneNumberAuth from '../components/PhoneNumberAuth'
import moment from "moment";

function GratefulPage() {
  const [completed, setCompleted] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  })

  return (
    <div className="group">
      <div className="entry">
        <div className="entry-header mt mb">
          <h2 className="fs24 fw-black c-pink">{moment().format(`dddd`)}</h2>
          <h3 className="fs16 fw-black c-dark-red">{moment().format(`DD MMMM`)}</h3>
        </div>

        { !completed && <GratefulForm hidden={completed} items="3" onComplete={(e) => setCompleted(true)} /> }
        { completed && !user && <PhoneNumberAuth hidden={completed} onComplete={setUser} /> }
        { user && completed && <span>Thank you for submitting, come back tomorrow</span>}
      </div>
    </div>
  );
}

export default GratefulPage;
