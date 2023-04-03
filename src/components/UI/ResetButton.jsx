import React from "react";

const ResetButton = (props) => {
  return (
    <button
      type="button"
      className={`button-reset ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      RESET
    </button>
  );
};
export default ResetButton;
