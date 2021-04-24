import { Grid, IconButton } from "@material-ui/core";
import { Create, DeleteForever } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteServus,
  toggleDialog,
  updateCurrentServus,
} from "../../redux/slice";

const EditAndDeleteButtonsComponent = ({ servus }) => {
  const dispatch = useDispatch();
  const { id } = servus;
  return (
    <Grid container justify="space-between">
      <IconButton
        onClick={() => {
          dispatch(updateCurrentServus(id));
          dispatch(toggleDialog("servusi"));
        }}
      >
        <Create />
      </IconButton>
      <IconButton
        onClick={() => {
          dispatch(deleteServus(id));
        }}
      >
        <DeleteForever />
      </IconButton>
    </Grid>
  );
};

export default EditAndDeleteButtonsComponent;
