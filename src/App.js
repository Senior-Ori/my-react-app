import "./App.css";
import { useState } from "react";
import DataFetching from "./components/DataFetching";
import FetchUpdate from "./components/FetchUpdate";

function App() {
  const [list, setList] = useState([]);
  const [found, setFound] = useState(undefined);
  return (
    <div className="App-header">
      <h1>Hello There!</h1>
      <FetchUpdate updateLocalList={setList} setFound={setFound} />
      <DataFetching list={list} found={found} />
    </div>
  );
}

export default App;
