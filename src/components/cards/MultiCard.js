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

const MultiCardComponent = ({ choice, backgroundColor }) => {
  const { title, description, cost } = choice;
  return (
    <Grid
      container
      style={{
        backgroundColor,
        height: "100%",
      }}
    >
      <Card
        style={{ backgroundColor: "inherit", padding: "16px", height: "100%" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ textTransform: "uppercase" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{ textTransform: "uppercase" }}
            >{`${cost} Coin(s)`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <AlterMultChoiceComponent choice={choice} />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Interweave content={description} />
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MultiCardComponent;
