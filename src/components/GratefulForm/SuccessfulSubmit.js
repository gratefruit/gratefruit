import React from "react";

export default function(props) {
  const items = props.items || [];

  const listItems = items.map((gratitude, index) => (
    <li className="list-item" key={index}>
      {gratitude}
    </li>
  ));

  return (
    <div>
      <h3 className="h3 c-ground mb-">Well done {props.name}</h3>

      <ul className="list c-gold">{listItems}</ul>

      <button className="btn btn--primary" onClick={props.onComplete}>Save</button>
    </div>
  );
}
