import { createSlice } from '@reduxjs/toolkit'
const initialState = [];
const Productslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        allProduct: (state, action) => {
        
        },
    }
});

export const { allProduct } = Productslice.actions
export default Productslice.reducer