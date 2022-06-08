import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Cartslice';
import ProductReducer from './Productslice';
import CategoryproductReducer from './Categoryproduct';
export const store = configureStore({
  reducer: {
    Cartitem: CartReducer,
    Product: ProductReducer,
    Categoryproduct: CategoryproductReducer,
  },
})