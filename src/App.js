import "./App.css";
import DataFetching from "./components/DataFetching";
import FetchUpdate from "./components/FetchUpdate";

function App() {
  return (
    <div className="App-header">
      <h1>Hello There!</h1>
      <h1>{process.env.jojo}</h1>
      {console.log(process.env.jojo)}
      <FetchUpdate />
      <DataFetching />
    </div>
  );
}

export default App;
