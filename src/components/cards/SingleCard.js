import { Button, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { updateWares } from "../../redux/slice";

const SingleCardComponent = ({ choice, backgroundColor }) => {
  const { title, description, cost } = choice;
  const dispatch = useDispatch();
  return (
    <Card
      component={Button}
      onClick={() => dispatch(updateWares(choice))}
      style={{
        backgroundColor,
        padding: "16px",
        height: "100%",
        alignItems: "end",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          {`${cost} Coin(s)`}
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ textTransform: "none" }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SingleCardComponent;
