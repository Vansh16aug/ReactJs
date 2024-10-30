import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    currentOrder: {
      items: [],
      shippingInfo: null,
      total: 0,
      quantity: 0,
    },
  },
  reducers: {
    setShippingInfo: (state, action) => {
      state.currentOrder.shippingInfo = action.payload;
    },
    addOrder: (state, action) => {
      state.items.push(action.payload);
    },
    updateOrder: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.currentOrder.items.find((item) => item._id === _id);
      if (item) {
        const quantityDifference = quantity - item.quantity;
        item.quantity = quantity;
        item.total = item.price * quantity;
        state.currentOrder.total = state.currentOrder.items.reduce(
          (sum, item) => sum + item.total,
          0
        );
        state.currentOrder.quantity += quantityDifference;
      }
    },
    removeOrder: (state, action) => {
      const removedItem = state.currentOrder.items.find(
        (item) => item._id === action.payload
      );
      if (removedItem) {
        state.currentOrder.quantity -= removedItem.quantity;
      }
      state.currentOrder.items = state.currentOrder.items.filter(
        (item) => item._id !== action.payload
      );
      state.currentOrder.total = state.currentOrder.items.reduce(
        (sum, item) => sum + item.total,
        0
      );
    },
    clearOrders: (state) => {
      state.currentOrder.items = [];
      state.currentOrder.shippingInfo = null;
      state.currentOrder.total = 0;
      state.currentOrder.quantity = 0;
    },
    completeOrder: (state) => {
      const completedOrder = {
        ...state.currentOrder,
        date: new Date().toISOString(),
        _id: Date.now().toString(),
      };
      state.items.push(completedOrder);
      state.currentOrder = {
        items: [],
        shippingInfo: null,
        total: 0,
        quantity: 0,
      };
    },
  },
});

export const {
  addOrder,
  updateOrder,
  removeOrder,
  setShippingInfo,
  clearOrders,
  completeOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
