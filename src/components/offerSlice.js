import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: ["Nowości", "Oferta", "O nas", "Galeria", "Kontakt"],
};

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
});

export const selectOffer = (state) => state.offer.offers;

export default offerSlice.reducer;
