import { useRef } from "react";
//be aware to send {props.labelText} & {props.inputType}.
function InputForm(props) {
  const enteredValueRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredValueRef.current.value.trim().length > 0) {
      props.fetchNewName(enteredValueRef.current.value);
    }
    enteredValueRef.current.value = "";
  };
  return (
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
  );
}

export default InputForm;
