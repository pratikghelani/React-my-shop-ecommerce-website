const { createSlice } = require('@reduxjs/toolkit');
const Productslice = createSlice({
    name: 'product',
    initialState: {
        data: [],
    },

    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setProducts, setStatus } = Productslice.actions;
export default Productslice.reducer;
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json();
            dispatch(setProducts(data));
        } catch (err) {
            console.log(err);
        }
    };
}