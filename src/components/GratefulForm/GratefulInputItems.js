import React from 'react';
import Pagination from "../Pagination";

const GratefulInputItems = (props) => {
  const { index, onChange, onKeyPress, item } = props
  const active = props.active || 0
      return <li
          hidden={(index !== active)}
          className="list-item list-item--input mt- mb- por">
          <textarea
              name={index}
              className="form-input form-input-textarea fs16 bg-white c-gold"
              id={`item-${index}`}
              placeholder="Today I'm grateful for..."
              onChange={(event) => onChange(event, index)}
              onKeyPress={onKeyPress(index)}
              ref={input => input && input.focus()}
              value={item} />

          <div className="form-pagination">
            <Pagination items={props.active} />
          </div>
      </li>
}

export default GratefulInputItems
