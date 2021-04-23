import { Grid, GridList, GridListTile, withWidth } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import data from "../../data";
import { getWares, getWaresTitlesArray } from "../../redux/selectors";
import CardComponent from "../cards";

const { wares } = data;

const CardListComponent = ({ width }) => {
  const selectedWaresTitles = useSelector(getWaresTitlesArray);
  const breakpoints = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
  };
  const cardList = wares.choices.map((choice) => ({
    ...choice,
    picked: selectedWaresTitles.includes(choice.title),
  }));
  return (
    <Grid container>
      <GridList cellHeight="auto" cols={breakpoints[width]} spacing={16}>
        {cardList.map((choice) => {
          return (
            <GridListTile key={`grid-list-tile-${choice.title}`}>
              <CardComponent choice={choice} />
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

export default withWidth()(CardListComponent);
