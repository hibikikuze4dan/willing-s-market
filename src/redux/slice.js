import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    wares: [],
    servusi: [],
    currentServus: "",
    dialogs: {
      servusi: false,
      save: false,
      export: false,
    },
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
    toggleDialog: (state, action) => {
      state.dialogs = {
        ...state.dialogs,
        [action.payload]: !state.dialogs[action.payload],
      };
    },
    addServus: (state) => {
      const id = Math.random().toString(36).substr(2, 9);
      state.servusi = [
        ...state.servusi,
        {
          id,
          name: "",
          imgSrc: "",
          tempImgSrc: "",
        },
      ];
      state.currentServus = id;
    },
    updateServus: (state, action) => {
      const servusi = state.servusi;
      const servusIndex = state.servusi.findIndex(
        (servus) => servus.id === action.payload.id
      );
      servusi[servusIndex] = action.payload;
      state.servusi = [...servusi];
    },
    saveServusTempLink: (state, action) => {
      const servusi = state.servusi;
      const servusIndex = state.servusi.findIndex(
        (servus) => servus.id === action.payload
      );
      let servus = servusi[servusIndex];
      servus = {
        ...servus,
        imgSrc: servus.tempImgSrc,
      };
      servusi[servusIndex] = servus;
      state.servusi = [...servusi];
    },
    updateCurrentServus: (state, action) => {
      state.currentServus = action.payload;
    },
    deleteServus: (state, action) => {
      state.servusi = [
        ...state.servusi.filter((servus) => servus.id !== action.payload),
      ];
      state.currentServus = "";
    },
    loadSave: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const {
  updateWares,
  updateMultWare,
  toggleDialog,
  addServus,
  updateServus,
  saveServusTempLink,
  loadSave,
  updateCurrentServus,
  deleteServus,
} = dataSlice.actions;

export default dataSlice.reducer;
