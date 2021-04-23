import { Button, Card, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { updateWares } from "../../redux/slice";

const SingleCardComponent = ({ choice }) => {
  const { title, description, cost } = choice;
  const dispatch = useDispatch();
  return (
    <Card style={{ backgroundColor: "inherit" }}>
      <Button onClick={() => dispatch(updateWares(choice))}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {title}
          </Grid>
          <Grid item xs={12}>
            {`${cost} Coin(s)`}
          </Grid>
          <Grid item xs={12}>
            {description}
          </Grid>
        </Grid>
      </Button>
    </Card>
  );
};

export default SingleCardComponent;
