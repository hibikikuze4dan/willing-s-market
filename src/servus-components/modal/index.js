import { Button, Dialog, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentServusFromServusi,
  getDialogsByFunction,
} from "../../redux/selectors";
import {
  saveServusTempLink,
  toggleDialog,
  updateServus,
} from "../../redux/slice";

const useStyles = makeStyles((theme) => ({
  dialog: {
    overflowY: "hidden",
  },
}));

const ModalComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector(getDialogsByFunction)("servusi");
  const servus = useSelector(getCurrentServusFromServusi);
  const { name, tempImgSrc, id } = servus;
  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={isOpen}
      onClose={() => dispatch(toggleDialog("servusi"))}
    >
      <Grid container spacing={4} style={{ padding: "32px" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Servus's Name"
            value={name}
            onChange={(e) =>
              dispatch(updateServus({ ...servus, name: e.target.value }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <TextField
              label="Image Src"
              value={tempImgSrc}
              onChange={(e) =>
                dispatch(
                  updateServus({ ...servus, tempImgSrc: e.target.value })
                )
              }
              helperText="Needs actual img link (ex. https://*.jpg)"
            />
            <Button
              onClick={() => {
                dispatch(saveServusTempLink(id));
              }}
            >
              Save New Link
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalComponent;
