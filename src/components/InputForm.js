import React, { useState, useEffect } from "react";
import FetchUpdate from "./FetchUpdate";
//be aware to send {props.labelText} & {props.inputType}.
function InputForm(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue);
    <FetchUpdate enteredValue={"doesn't work.."} />;
    setEnteredValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {props.labelText === undefined ? "labelText" : props.labelText}
        <input
          type={props.inputType === undefined ? "text" : props.inputType}
          value={enteredValue}
          onChange={(event) => setEnteredValue(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default InputForm;
