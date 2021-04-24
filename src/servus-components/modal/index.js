import { Button, Dialog, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentServusFromServusi,
  getDialogsByFunction,
} from "../../redux/selectors";
import { saveTempLink, toggleDialog, updateServus } from "../../redux/slice";

const ModalComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getDialogsByFunction)("servusi");
  const servus = useSelector(getCurrentServusFromServusi);
  const { name, tempImgSrc, id } = servus;
  return (
    <Dialog open={isOpen} onClose={() => dispatch(toggleDialog("servusi"))}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="Servus's Name"
            value={name}
            onChange={(e) =>
              dispatch(updateServus({ ...servus, name: e.target.value }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image Src"
            value={tempImgSrc}
            onChange={(e) =>
              dispatch(updateServus({ ...servus, tempImgSrc: e.target.value }))
            }
            helperText="Needs actual img link (ex. https://*.jpg)"
          />
          <Button onClick={() => dispatch(saveTempLink(id))}>
            Save New Link
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalComponent;
