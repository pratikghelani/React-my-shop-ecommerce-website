const { createSlice } = require('@reduxjs/toolkit');

const Categoryproduct = createSlice({
    name: 'product',
    initialState: {
        data: [],
    },
    reducers: {
        setProductCategoryproduct(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setProductCategoryproduct } = Categoryproduct.actions;
export default Categoryproduct.reducer;
export function fetchCategoryproduct() {
    return async function fetchProductThunk(dispatch, getState) {
        try {
            const jewelery = "https://fakestoreapi.com/products/category/jewelery";
            const res = await fetch(jewelery);
            const data = await res.json();
            dispatch(setProductCategoryproduct(data));
        } catch (err) {
            console.log(err);
        }
    };
}