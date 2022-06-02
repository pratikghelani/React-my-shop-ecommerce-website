import { createSlice } from '@reduxjs/toolkit'
const initialState = [];
const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        add: (state, action) => {
            state.push(action);
        },
        remove: (state, action) => {
            alert(action.payload)
            return state.filter((item) => item.id !== action.payload);
            
        }
    }
});

export const { add, remove } = Cartslice.actions
export default Cartslice.reducer