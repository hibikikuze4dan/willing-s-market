import { omit } from "lodash";
import { createSelector } from "reselect";

export const getWares = (state) => {
  return state?.wares || [];
};

export const getWaresTitlesArray = createSelector(getWares, (wares) =>
  wares.map((ware) => ware.title)
);
