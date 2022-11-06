import "./App.css";
import DataFetching from "./components/DataFetching";
import FetchUpdate from "./components/FetchUpdate";

function App() {
  return (
    <div className="App-header">
      <h1>Hello There!</h1>
      <FetchUpdate />
      <DataFetching />
    </div>
  );
}

export default App;
