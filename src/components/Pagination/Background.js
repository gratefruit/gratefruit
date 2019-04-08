import React from "react";

const Background = props => {
  return (
    <g>
      <path
        fill="#F1EBDA"
        d="M10.5 16.5c-.3.7-1.2 1-1.9.6A21 21 0 0 1 .1 7.5c-.3-.7 0-1.5.6-1.8C5.4 3.3 10.8 1.5 16.8 0A1 1 0 0 1 18 1.4c-2.7 5.9-4.7 10-7.4 15.1z"
      />

      <path
        fill="#F1EBDA"
        fillRule="evenodd"
        d="M17 19c-.2.7.2 1.6 1 1.8 4.6 1.5 9.5 1.5 14 .4.8-.2 1.2-1 .9-1.9-2.2-5.7-4.6-11-6.8-15.6-.5-1-1.7-1-2.2 0-2.6 5-5 10.3-6.8 15.3z"
        clipRule="evenodd"
      />

      <path
        fill="#F1EBDA"
        fillRule="evenodd"
        d="M39.4 17.2c.3.7 1.1 1 1.8.7 4-2 7.4-4.7 9.6-8.7.4-.7.1-1.5-.5-1.9-5.7-3-10-5-16-7.2-.8-.3-1.5.4-1.2 1.2 2 5.3 4.2 11.1 6.3 15.9z"
        clipRule="evenodd"
      />
    </g>
  );
};

export default Background;
