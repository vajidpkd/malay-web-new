import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    toggleWishList: (state, action) => {
      const itemPayload = action.payload;
      const itemExists = state.wishlist.find(
        (item) => item.ItemId === itemPayload.ItemId
      );

      if (itemExists) {
        state.wishlist = state.wishlist.filter(
          (item) => item.ItemId !== itemPayload.ItemId
        );
      } else {
        state.wishlist.push(itemPayload);
      }
    },

    addToWishlist: (state, action) => {
      const itemPald = action.payload;
      const iteexit = state.wishlist.find(
        (item) => item.ItemId === itemPald.ItemId
      );
      if (iteexit) return;
      state.wishlist.push(itemPald);
    },

    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => item.ItemId !== itemIdToRemove
      );
    },
  },
});

export const { addToWishlist, toggleWishList, removeFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
