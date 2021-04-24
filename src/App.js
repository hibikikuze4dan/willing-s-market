import logo from "./logo.svg";
import "./App.css";
import CardListComponent from "./components/card-list";
import ServusTitleComponent from "./servus-components/title";
import ServusListComponent from "./servus-components/servus-list";
import ApplicationBarComponent from "./components/app-bar";

function App() {
  return (
    <div className="App">
      <ApplicationBarComponent />
      <CardListComponent />
      <ServusTitleComponent />
      <ServusListComponent />
    </div>
  );
}

export default App;
