import { Card, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { Img } from "react-image";

const ServusCardComponent = ({ servus }) => {
  const { imgSrc, name } = servus;
  return (
    <Grid container>
      <Card style={{ maxWidth: "100%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Img
              style={{ height: "250px" }}
              key={imgSrc}
              src={imgSrc}
              loader={<CircularProgress />}
            />
          </Grid>
          <Grid item xs={12}>
            {name}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ServusCardComponent;
