import { AppBar, Button, Grid, Typography, withWidth } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmountOfCoinsLeft,
  getAmountOfServusiLeft,
} from "../../redux/selectors";
import { toggleDialog } from "../../redux/slice";
import SaveDialogComponent from "../save-dialog";

const ApplicationBarComponent = ({ width }) => {
  const dispatch = useDispatch();
  const numOfServusi = useSelector(getAmountOfServusiLeft);
  const numOfCoins = useSelector(getAmountOfCoinsLeft);
  const toggleSaveDialog = () => dispatch(toggleDialog("save"));
  const greaterThanSmall = !["xs", "sm"].includes(width);

  return (
    <AppBar position="fixed" style={{ padding: "8px 8px" }}>
      <Grid container justify="space-between">
        <Button startIcon={<Save />} onClick={toggleSaveDialog}>
          {greaterThanSmall ? "Save/Load" : ""}
        </Button>
        <Typography style={{ alignSelf: "center", paddingRight: "32px" }}>{`${
          greaterThanSmall ? "Servusi" : "S"
        }: ${numOfServusi}`}</Typography>
        <Typography style={{ alignSelf: "center" }}>{`${
          greaterThanSmall ? "Coins" : "C"
        }: ${numOfCoins}`}</Typography>
      </Grid>
      <SaveDialogComponent onClose={toggleSaveDialog} />
    </AppBar>
  );
};

export default withWidth()(ApplicationBarComponent);
