import { Grid, withWidth, GridList, GridListTile } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getServusi } from "../../redux/selectors";
import ServusCardComponent from "../servus-card";

const ServusListComponent = ({ width }) => {
  const servusi = useSelector(getServusi);
  const breakpoints = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
  };
  return (
    <Grid container style={{ paddingBottom: "24px" }}>
      <GridList
        cellHeight="auto"
        cols={breakpoints[width]}
        spacing={16}
        style={{ width: "100%", margin: 0 }}
      >
        {servusi.map((servus) => {
          return (
            <GridListTile key={`grid-list-tile-${servus.id}`}>
              <ServusCardComponent servus={servus} />
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

export default withWidth()(ServusListComponent);
