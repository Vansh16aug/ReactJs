import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";
import orderReducer from "./order/orderSlice";
import { loadState, saveState } from "./localStorage";

// Load the persisted state
const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer
  },
  preloadedState: persistedState,
});

// Save the state on every change
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
