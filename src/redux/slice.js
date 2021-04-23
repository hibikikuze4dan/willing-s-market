import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    wares: [],
    servusi: [],
  },
  reducers: {
    updateWares: (state, action) => {
      const exists = state.wares.find(
        (ware) => action.payload.title === ware.title
      );
      state.wares = exists
        ? [...state.wares.filter((ware) => action.payload.title !== ware.title)]
        : [...state.wares, action.payload];
    },
    updateMultWare: (state, action) => {
      const choiceIndex = state.wares.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (
        (choiceIndex !== -1 && !action.payload.increase) ||
        !action.payload.increase
      ) {
        state.wares = [
          ...state.wares.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else {
        state.wares = [...state.wares, action.payload];
      }
    },
  },
});

export const { updateWares, updateMultWare } = dataSlice.actions;

export default dataSlice.reducer;
