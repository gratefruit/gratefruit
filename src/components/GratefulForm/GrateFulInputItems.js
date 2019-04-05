import React from 'react';

const GratefulInputItems = (props) => {
  const { index, onChange, onKeyPress, item } = props
  const active = props.active || 0
      return <li
          hidden={(index !== active)}
          className="list-item list-item--input mt- mb-">
          <textarea
              name={index}
              className="form-input form-input-textarea fs16 bg-white c-gold"
              id={`item-${index}`}
              placeholder="Today I'm grateful for..."
              onChange={(event) => onChange(event, index)}
              onKeyPress={onKeyPress(index)}
              ref={input => input && input.focus()}
              value={item} />
      </li>
}

export default GratefulInputItems
