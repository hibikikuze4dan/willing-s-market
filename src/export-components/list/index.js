import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import React from "react";

const ListComponent = ({ title, items }) => {
  return (
    <List subheader={title}>
      {items.map((item) => {
        const Comp = item?.imgSrc ? "li" : "ul";
        const subheader = (
          <Comp>
            <a href={item?.imgSrc}>{item.title}</a>
          </Comp>
        );
        return (
          <List subheader={subheader} key={`item-${item.title}`}>
            {item?.cost !== undefined && (
              <ListItem component="ul">
                <ListItemText primary={item.cost} />
              </ListItem>
            )}
          </List>
        );
      })}
    </List>
  );
};

export default ListComponent;
