import React from "react";

const ResetButton = (props) => {
  return (
    <button
      type="button"
      className={`button-reset ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Reset
    </button>
  );
};
export default ResetButton;
