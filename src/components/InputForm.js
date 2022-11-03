import React, { useState } from "react";
import FetchUpdate from "./FetchUpdate";
//be aware to send {props.labelText} & {props.inputType}.
function InputForm(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [temperInput, setTemperInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTemperInput(enteredValue);
    setEnteredValue("");
    setDidSubmit(true);
  };
  return (
    <div>
      {didSubmit && (
        <FetchUpdate enteredName={temperInput} flagSubmit={setDidSubmit} />
      )}
      {/* {React.useEffect(() => setDidSubmit(false), [didSubmit])} */}
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
    </div>
  );
}

export default InputForm;
