import React from "react";
import GratefulForm from "../components/GratefulForm";
import moment from "moment";

function GratefulPage(props) {
  return (
    <div className="group">
      <div className="entry">
        <div className="entry-header mt mb">
          <h2 className="fs24 fw-black c-pink">{moment().format(`dddd`)}</h2>
          <h3 className="fs16 fw-black c-dark-red">{moment().format(`DD MMMM YYYY`)}</h3>
        </div>

        <GratefulForm items="3" />
      </div>
    </div>
  );
}

export default GratefulPage;
