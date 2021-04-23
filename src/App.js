import logo from "./logo.svg";
import "./App.css";
import CardListComponent from "./components/card-list";
import ServusTitleComponent from "./servus-components/title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CardListComponent />
      <ServusTitleComponent />
    </div>
  );
}

export default App;
