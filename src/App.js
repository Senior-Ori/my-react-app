import "./App.css";
import DataFetching from "./components/DataFetching";
import InputForm from "./components/InputForm";
import NamesList from "./components/NamesList";

function App() {
  return (
    <div className="App-header">
      <h1>Hello There!</h1>
      <InputForm labelText={"New Label Text"} inputType={"text"} />
      <NamesList />
      <DataFetching />
    </div>
  );
}

export default App;
