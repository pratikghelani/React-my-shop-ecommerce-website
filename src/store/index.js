import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Cartslice';
import ProductReducer from './Productslice';
export const store = configureStore({
  reducer: {
    Cart: CartReducer,
    Product: ProductReducer,
  },
})