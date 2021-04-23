import React from "react";
import { Grid, Typography, Card, IconButton } from "@material-ui/core";
import Interweave from "interweave";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getWares } from "../../redux/selectors";
import { updateMultWare } from "../../redux/slice";

const AlterMultChoiceComponent = ({ choice }) => {
  const dispatch = useDispatch();
  const wares = useSelector(getWares);
  const purchases = wares.filter((ware) => {
    return ware.title === choice.title;
  }).length;

  return (
    <Grid container justify="space-between">
      <IconButton
        onClick={() => dispatch(updateMultWare({ ...choice, increase: false }))}
      >
        <Remove />
      </IconButton>
      <Typography align="center" style={{ alignSelf: "center" }}>
        {purchases}
      </Typography>
      <IconButton
        onClick={() => dispatch(updateMultWare({ ...choice, increase: true }))}
      >
        <Add />
      </IconButton>
    </Grid>
  );
};

const MultiCardComponent = ({ choice }) => {
  const { title, description, cost } = choice;
  return (
    <Grid container style={{ backgroundColor: "inherit" }}>
      <Card style={{ backgroundColor: "inherit" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{`${cost} Coin(s)`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <AlterMultChoiceComponent choice={choice} />
          </Grid>
          <Grid item xs={12}>
            <Interweave content={description} />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MultiCardComponent;