import "./App.css";
import { useState } from "react";
import DataFetching from "./components/DataFetching";
import InputForm from "./components/InputForm";

function App() {
  //const [enteredName, setEnteredName] = useState("");
  //const [saveEnteredName, setSaveEnteredNane] = useState("");
  //const [names, setNames] = useState([]);

  // function fetchNamesHandler() {
  //   fetch(
  //     `https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names/${"Ori"}/.json`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setNames(data);
  //     });
  //   console.log(names);
  // }
  // fetchNamesHandler();
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   setSaveEnteredNane(enteredName);
  //   if (enteredName.trim() === "") return;
  //   fetch(
  //     `https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names/${enteredName}/.json`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setNames(data.names);
  //     });
  //   const currentNames = [...names];
  //   const existIndex = currentNames.findIndex(
  //     (val) => val.name === enteredName
  //   );
  //   if (currentNames[existIndex])
  //     fetch(
  //       `https://ori-projects-default-rtdb.europe-west1.firebasedatabase.app/names/${enteredName}/.json`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(),
  //       }
  //     ) /*currentNames[existIndex].amount++*/;
  //   else currentNames.push({ name: enteredName, amount: 1 });

  //   setNames(currentNames); //i set it when done calculating, that fixes the issue.
  //   setEnteredName("");
  // };
  // console.log(names);

  return (
    <div className="App-header">
      <h1>Hello There!</h1>
      <InputForm labelText={"New Label Text"} inputType={"text"} />
      <DataFetching />
      {/* <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <h3>
        {saveEnteredName.trim() !== "" &&
          `the name ${saveEnteredName} entered ${
            names[names.findIndex((val) => val.name === saveEnteredName)].amount
          }`}
      </h3>
      <section>
        <button onClick={fetchNamesHandler}>fetch console check</button>
      </section> */}
    </div>
  );
}

export default App;
