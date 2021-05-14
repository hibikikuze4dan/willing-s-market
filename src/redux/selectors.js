import { get, sum } from "lodash";
import { createSelector } from "reselect";

export const getShowStory = (state) => state.showStory;

export const getSaveTitle = (state) => state.saveTitle;

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

export const getWaresDeduped = createSelector(getWares, (wares) => {
  return wares.reduce((allWares, ware) => {
    const wareExistsAtIndex = allWares.findIndex(
      (aWare) => aWare.title === ware.title
    );

    if (wareExistsAtIndex === -1) allWares.push({ ...ware, purchases: 1 });
    else
      allWares[wareExistsAtIndex] = {
        ...allWares[wareExistsAtIndex],
        purchases: allWares[wareExistsAtIndex].purchases + 1,
      };
    return allWares;
  }, []);
});

export const getServusiForExport = createSelector(getServusi, (servusi) => {
  return servusi.map(({ name, imgSrc }) => ({ title: name, imgSrc }));
});
