import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";

const ServusTitleComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        Your Servusi
      </Grid>
      <Grid item xs={12}>
        <Button startIcon={<Add />}>Add a Servus</Button>
      </Grid>
    </Grid>
  );
};

export default ServusTitleComponent;
