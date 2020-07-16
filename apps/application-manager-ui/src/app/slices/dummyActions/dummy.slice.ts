import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../index";
import { DummyActionsStateModel } from "./dummy.type";

import { DUMMY_API_URL } from "../../utils/constants";

export const defaultDummyActionState: DummyActionsStateModel = {
  fetching: false,
  dummyValue1: false,
  dummyValue2: null,
  error: null,
};

const DummyActionsSlice = createSlice({
  name: "dummy",
  initialState: defaultDummyActionState,
  reducers: {
    toggleDummyValue1(state): DummyActionsStateModel {
      return { ...state, dummyValue1: !state.dummyValue1 };
    },
    dummyFetching(state): DummyActionsStateModel {
      return { ...state, fetching: true };
    },
    dummyFetchSuccess(
      state,
      action: PayloadAction<object>
    ): DummyActionsStateModel {
      return {
        ...state,
        fetching: false,
        dummyValue2: action.payload,
      };
    },
    setError(state): DummyActionsStateModel {
      return { ...state, error: "Error", fetching: false };
    },
  },
});

export const dummyFetch = (): AppThunk => {
  return async (dispatch): Promise<void> => {
    dispatch(dummyFetching());

    const { data } = await axios.get(DUMMY_API_URL);
    dispatch(dummyFetchSuccess(data));

    // error handling will be added
  };
};

export const {
  toggleDummyValue1,
  dummyFetching,
  dummyFetchSuccess,
  setError,
} = DummyActionsSlice.actions;

export default DummyActionsSlice.reducer;
