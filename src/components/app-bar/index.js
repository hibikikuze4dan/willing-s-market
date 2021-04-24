import { AppBar, Button, Grid, Typography } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmountOfCoinsLeft,
  getAmountOfServusiLeft,
  getServusi,
} from "../../redux/selectors";
import { toggleDialog } from "../../redux/slice";
import SaveDialogComponent from "../save-dialog";

const ApplicationBarComponent = () => {
  const dispatch = useDispatch();
  const numOfServusi = useSelector(getAmountOfServusiLeft);
  const numOfCoins = useSelector(getAmountOfCoinsLeft);
  const toggleSaveDialog = () => dispatch(toggleDialog("save"));

  return (
    <AppBar position="fixed">
      <Grid container justify="space-between">
        <Button startIcon={<Save />} onClick={toggleSaveDialog}>
          Save/Load
        </Button>
        <Typography>{`Servusi: ${numOfServusi}`}</Typography>
        <Typography>{`Coins: ${numOfCoins}`}</Typography>
      </Grid>
      <SaveDialogComponent onClose={toggleSaveDialog} />
    </AppBar>
  );
};

export default ApplicationBarComponent;
