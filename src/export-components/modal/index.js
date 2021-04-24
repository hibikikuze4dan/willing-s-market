import { Dialog, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDialogsByFunction,
  getServusiForExport,
  getWaresDeduped,
} from "../../redux/selectors";
import { toggleDialog } from "../../redux/slice";
import ListComponent from "../list";

const ExportModalComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getDialogsByFunction)("export");
  const wares = useSelector(getWaresDeduped);
  const servusi = useSelector(getServusiForExport);
  return (
    <Dialog open={isOpen} onClose={() => dispatch(toggleDialog("export"))}>
      <Grid container>
        <Grid item xs={12}>
          <ListComponent title="Wares" items={wares} />
        </Grid>
        <Grid item xs={12}>
          <ListComponent title="Servusi" items={servusi} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ExportModalComponent;
