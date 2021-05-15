import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

const DeleteSavesComponent = ({ onClose }) => {
  const classes = useStyles();
  const saves = JSON.parse(localStorage.getItem("saves")) || [];
  const [selectedSave, updateSelectedSave] = useState("");
  const handleClick = () => {
    localStorage.setItem(
      "saves",
      JSON.stringify(saves.filter((save) => save.saveName !== selectedSave))
    );
    onClose();
  };

  return (
    <Grid container justify="space-between">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="save-to-delete">Save to Delete</InputLabel>
        <Select
          native
          value={selectedSave}
          onChange={(e) => updateSelectedSave(e.target.value)}
          inputProps={{ name: "load", id: "save-to-delete" }}
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
      <Button variant="outlined" onClick={handleClick}>
        Delete
      </Button>
    </Grid>
  );
};

export default DeleteSavesComponent;
