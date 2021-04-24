import { get, omit, sum } from "lodash";
import { createSelector } from "reselect";

export const getWares = (state) => {
  return state?.wares || [];
};

export const getServusSparkWares = createSelector(getWares, (wares) =>
  wares.filter((ware) => ware.title === "Servus Spark")
);

export const getWaresCostArray = createSelector(getWares, (wares) =>
  wares.map((ware) => ware?.cost || 0)
);

export const getAmountOfCoinsLeft = createSelector(
  getWaresCostArray,
  (costArray) => 6 - sum(costArray)
);

export const getDialogs = (state) => {
  return state?.dialogs || {};
};

export const getServusi = (state) => state?.servusi || [];

export const getAmountOfServusiLeft = createSelector(
  getServusSparkWares,
  getServusi,
  (wares, servusi) => 10 + wares.length - servusi.length
);

export const getCurrentServusString = (state) => {
  return state?.currentServus || "";
};

export const getCurrentServusFromServusi = createSelector(
  getServusi,
  getCurrentServusString,
  (servusi, servusString) =>
    servusi.find((servus) => servus.id === servusString) || {}
);

export const getWaresTitlesArray = createSelector(getWares, (wares) =>
  wares.map((ware) => ware.title)
);

export const getDialogsByFunction = createSelector(getDialogs, (dialogs) => {
  return (specificDialog) => get(dialogs, specificDialog, false);
});

export const getDataForSaving = createSelector(
  getServusi,
  getWares,
  (servusi, wares) => ({ servusi, wares })
);
