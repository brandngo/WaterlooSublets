//organizing: https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./slice/auth";
import messageReducer from "./slice/message";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
  devTools: true,
});

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
