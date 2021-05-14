import "./App.css";
import CardListComponent from "./components/card-list";
import ServusTitleComponent from "./servus-components/title";
import ServusListComponent from "./servus-components/servus-list";
import ApplicationBarComponent from "./components/app-bar";
import ExportModalComponent from "./export-components/modal";
import SectionComponent from "./components/section";
import data from "./data";
import ShowStoryComponent from "./components/show-story";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div
      className="App"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        padding: "0 16px 64px 16px",
      }}
    >
      <ApplicationBarComponent />
      <Typography variant="h4" style={{ padding: "64px 0 0 0" }}>
        Willing Slave Market
      </Typography>
      <ShowStoryComponent />
      <SectionComponent section={data.opening}></SectionComponent>
      <SectionComponent section={data.servusi}></SectionComponent>
      <SectionComponent section={data.your_harem}>
        <ServusTitleComponent />
        <ServusListComponent />
      </SectionComponent>
      <SectionComponent section={data.wares}>
        <CardListComponent />
      </SectionComponent>
      <SectionComponent section={data.post_script}></SectionComponent>
      <SectionComponent section={data.the_next_day}></SectionComponent>
      <ExportModalComponent />
    </div>
  );
}

export default App;
