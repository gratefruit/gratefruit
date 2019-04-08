import React from "react";

import Background from "./Background";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Pagination = props => {
  const step = props.step;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="22" fill="none">
      <Background />

      {step > 0 && <StepOne />}
      {step > 1 && <StepTwo />}
      {step > 2 && <StepThree />}
    </svg>
  );
};

export default Pagination;
