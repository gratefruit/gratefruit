import React, { useState, useEffect } from "react";
import firebase from '../firebase'
import GratefulForm from "../components/GratefulForm";
import PhoneNumberAuth from '../components/PhoneNumberAuth'
import moment from "moment";

const firestore = firebase.firestore()

async function saveGratitudeLog(uid, entries) {
  await firestore.collection('gratitude').add({
    entries,
    uid,
    created: new Date()
  })
}


function GratefulPage() {
  const [entries, setEntries] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  })

  // When user and entries are both truthy, save the items in firebase with the user id
  useEffect(() => {
    if (user && entries) {
      saveGratitudeLog(user.uid, entries).then(() => console.log("saved"))
    }
  }, [user, entries])


  return (
    <div className="group">
      <div className="entry">
        <div className="entry-header mt mb">
          <h2 className="fs24 fw-black c-pink">{moment().format(`dddd`)}</h2>
          <h3 className="fs16 fw-black c-dark-red">{moment().format(`DD MMMM`)}</h3>
        </div>

        { !entries && <GratefulForm hidden={entries} items="3" onComplete={setEntries} /> }
        { entries && !user && <PhoneNumberAuth hidden={entries} onComplete={setUser} /> }
        { user && entries && <span>Thank you for submitting, come back tomorrow</span>}
      </div>
    </div>
  );
}

export default GratefulPage;
