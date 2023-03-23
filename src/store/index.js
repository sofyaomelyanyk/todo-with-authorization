import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";

export const store = configureStore({
  reduser: {
    user: userReduser,
  },
});
