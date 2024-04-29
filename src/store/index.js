import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./FetchStatus";
import bagSlice, { bagStatusActions } from "./bagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  },
});
export default myntraStore;
