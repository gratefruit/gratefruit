import React from "react";

export default function(props) {
  return (
    <div className="entry-header df aie">
      <div className="group df ais pb-">
        <span role="img" aria-label="Emoji" className="fs50 lh1 mr">
          {props.emojis}
        </span>
        <div className="entry-header-date">
          <h2 className="fs24 fw-black c-pink">{props.data.title}</h2>
          <h3 className="fs16 fw-black c-dark-red">{props.data.subtitle}</h3>
        </div>
      </div>
    </div>
  );
}
