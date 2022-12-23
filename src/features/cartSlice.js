import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const newItem = action.payload;
      const itemExistes = state.products.find(
        (item) => item.title === newItem.title
      );

      state.totalPrice += newItem.price;
      state.totalItems += 1;
      if (itemExistes) {
        itemExistes.quantity++;
      } else {
        state.products.push({
          id:
            newItem.id === "" || newItem.id === undefined || newItem.id === null
              ? Math.random()
              : newItem.id,
          price: newItem.price,
          image: newItem.image,
          title: newItem.title,
          quantity: 1,
       
        });
      }
    },
    removeProduct: (state, action) => {
      const item = action.payload;

      if (item.quantity === 1) {
        state.products.pop(item);
        state.totalPrice -= item.price;
        state.totalItems -= 1;

      } else {

        state.products.find((product) => {
          product.id === item.id && product.quantity--
        });
        state.totalPrice -= item.price;
        state.totalItems -= 1;
      }
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
