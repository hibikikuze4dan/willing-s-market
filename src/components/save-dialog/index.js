import {
  Button,
  Dialog,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataForSaving, getDialogsByFunction } from "../../redux/selectors";
import { loadSave, toggleDialog } from "../../redux/slice";
import { handleLocalSaveClick } from "./utils";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialog: {
    overflowY: "hidden",
    padding: "24px",
  },
}));

const NameAndSubmitSaveComponent = ({ onClose }) => {
  const [saveName, updateSaveName] = useState("");
  const dataToSave = useSelector(getDataForSaving);
  const handleClick = () => {
    handleLocalSaveClick(saveName, dataToSave);
    onClose();
  };
  return (
    <Grid container justify="space-around">
      <TextField
        label="Save Name"
        value={saveName}
        onChange={(e) => updateSaveName(e.target.value)}
        onKeyUp={(e) => (e.key === "Enter" ? handleClick() : null)}
      />
      <Button onClick={handleClick}>Save</Button>
    </Grid>
  );
};

const SelectSaveAndLoadComponent = ({ onClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const saves = JSON.parse(localStorage.getItem("saves")) || [];
  const [selectedSave, updateSelectedSave] = useState("");
  const handleClick = () => {
    dispatch(
      loadSave(saves.find((save) => save.saveName === selectedSave).saveData)
    );
    onClose();
  };
  return (
    <Grid container justify="space-around">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="save-to-load">Save to Load</InputLabel>
        <Select
          native
          value={selectedSave}
          onChange={(e) => updateSelectedSave(e.target.value)}
          inputProps={{ name: "load", id: "save-to-load" }}
        >
          <option aria-label="None" value="" />
          {saves.map((save) => {
            return (
              <option value={save.saveName} key={save.saveName}>
                {save.saveName}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <Button onClick={handleClick}>Load</Button>
    </Grid>
  );
};

const SaveDialogComponent = ({ onClose }) => {
  const isOpen = useSelector(getDialogsByFunction)("save");
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Dialog open={isOpen} onClose={onClose} classes={{ paper: classes.dialog }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NameAndSubmitSaveComponent onClose={onClose} />
        </Grid>
        <Grid item xs={12}>
          <SelectSaveAndLoadComponent onClose={onClose} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              onClick={() => {
                dispatch(toggleDialog("save"));
                dispatch(toggleDialog("export"));
              }}
            >
              View Build As Text
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SaveDialogComponent;
