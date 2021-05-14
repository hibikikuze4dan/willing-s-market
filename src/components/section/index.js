import { Grid, Typography } from "@material-ui/core";
import Interweave from "interweave";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getShowStory } from "../../redux/selectors";

const SectionComponent = ({ children, section, padding }) => {
  const { title, description, alwaysShowTitle } = section;
  const showStory = useSelector(getShowStory);
  return (
    <Grid container style={{ ...(padding && { padding }) }} spacing={4}>
      {(showStory || alwaysShowTitle) && (
        <Grid item xs={12}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
      )}
      {showStory && (
        <Grid item xs={12}>
          <Typography>
            {description.map((desc, index) => {
              return (
                <Fragment key={`Interweave-desc-${index}`}>
                  <Interweave content={desc} />
                  <br />
                  <br />
                </Fragment>
              );
            })}
          </Typography>
        </Grid>
      )}
      {children && (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  );
};

export default SectionComponent;
