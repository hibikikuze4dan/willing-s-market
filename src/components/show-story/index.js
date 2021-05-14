import { Checkbox, FormControlLabel, FormGroup, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowStory } from "../../redux/selectors";
import { toggleShowStory } from "../../redux/slice";

const ShowStoryComponent = () => {
  const checked = useSelector(getShowStory);
  const dispatch = useDispatch();
  return (
    <Grid container justify="center" style={{ paddingTop: "16px" }}>
      <FormGroup row>
        <FormControlLabel
          label="Show Story/Instructions?"
          labelPlacement="top"
          control={
            <Checkbox
              checked={checked}
              onChange={() => dispatch(toggleShowStory())}
              name="Show Story"
            />
          }
        />
      </FormGroup>
    </Grid>
  );
};

export default ShowStoryComponent;
