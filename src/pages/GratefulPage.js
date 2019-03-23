import React, { useState } from "react";
import GratefulForm from "../components/GratefulForm";
import PhoneNumberAuth from '../components/PhoneNumberAuth'
import moment from "moment";

function GratefulPage() {
  const [completed, setCompleted] = useState(false)

  return (
    <div className="group">
      <div className="entry">
        <div className="entry-header mt mb">
          <h2 className="fs24 fw-black c-pink">{moment().format(`dddd`)}</h2>
          <h3 className="fs16 fw-black c-dark-red">{moment().format(`DD MMMM YYYY`)}</h3>
        </div>

        { !completed && <GratefulForm hidden={completed} items="3" onComplete={(e) => setCompleted(true)} /> }
        { completed && <PhoneNumberAuth hidden={completed} /> }
      </div>
    </div>
  );
}

export default GratefulPage;
