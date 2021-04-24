import logo from "./logo.svg";
import "./App.css";
import CardListComponent from "./components/card-list";
import ServusTitleComponent from "./servus-components/title";
import ServusListComponent from "./servus-components/servus-list";
import ApplicationBarComponent from "./components/app-bar";
import ExportModalComponent from "./export-components/modal";

function App() {
  return (
    <div className="App">
      <ApplicationBarComponent />
      <CardListComponent />
      <ServusTitleComponent />
      <ServusListComponent />
      <ExportModalComponent />
    </div>
  );
}

export default App;
