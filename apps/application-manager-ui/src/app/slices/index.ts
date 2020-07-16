/* istanbul ignore file */
import { combineReducers } from "redux";
import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";

import dummyReducer from "./dummyActions/dummy.slice";

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<Promise<void>, RootState, null, AnyAction>;
export type ReactEvent = ChangeEvent<HTMLInputElement>;
