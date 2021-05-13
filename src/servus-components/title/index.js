import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { toggleDialog, addServus } from "../../redux/slice";
import ModalComponent from "../modal";

const ServusTitleComponent = () => {
  const dispatch = useDispatch();
  return (
    <Grid container spacing={4} style={{ paddingTop: "32px" }}>
      <Grid item xs={12}>
        <Typography variant="h4">Your Servusi</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            dispatch(addServus());
            dispatch(toggleDialog("servusi"));
          }}
          startIcon={<Add />}
        >
          Add a Servus
        </Button>
      </Grid>
      <ModalComponent />
    </Grid>
  );
};

export default ServusTitleComponent;
