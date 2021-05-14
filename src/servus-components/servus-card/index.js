import { Card, CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Img } from "react-image";
import EditAndDeleteButtonsComponent from "./EditAndDeleteButtons";

const ServusCardComponent = ({ servus }) => {
  const { imgSrc, name } = servus;
  const servusName = name ? name : "Name not provided";
  return (
    <Grid container justify="center">
      <Card
        style={{
          maxWidth: "100%",
          border: "1px solid black",
          backgroundColor: "inherit",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <EditAndDeleteButtonsComponent servus={servus} />
          </Grid>
          <Grid item xs={12}>
            <Img
              style={{ height: "250px" }}
              key={imgSrc}
              src={imgSrc}
              loader={<CircularProgress />}
              unloader={"Unable to Load Image"}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>{servusName}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ServusCardComponent;
