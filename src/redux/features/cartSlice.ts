import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProduct = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

const initialState: Array<TProduct> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      if (state.findIndex((item) => item.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
