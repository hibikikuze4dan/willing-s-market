import { Grid, Typography } from "@material-ui/core";
import React from "react";

const ListComponent = ({ title, items }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">{`${title}:`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {items.map((item, index) => {
            const purchases = item?.purchases || 0;
            const imgSrc = item?.imgSrc ? item.imgSrc : null;
            const Component = imgSrc ? "a" : "span";
            return (
              <Component
                href={imgSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
                {purchases > 1 ? ` x${purchases}` : ""}
                {index === items.length - 1 ? "" : ", "}
              </Component>
            );
          })}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ListComponent;
