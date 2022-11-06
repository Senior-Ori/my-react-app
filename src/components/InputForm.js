import React, { useState, useRef } from "react";
import FetchUpdate from "./FetchUpdate";
//be aware to send {props.labelText} & {props.inputType}.
function InputForm(props) {
  const enteredValueRef = useRef("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [temperInput, setTemperInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTemperInput(enteredValueRef.current.value);
    enteredValueRef.current.value = "";
    setDidSubmit(true);
  };
  return (
    <div>
      {didSubmit && (
        <FetchUpdate enteredName={temperInput} flagSubmit={setDidSubmit} />
      )}
      <form onSubmit={handleSubmit}>
        <label>
          {props.labelText === undefined ? "labelText" : props.labelText}
          <input
            type={props.inputType === undefined ? "text" : props.inputType}
            ref={enteredValueRef}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default InputForm;
