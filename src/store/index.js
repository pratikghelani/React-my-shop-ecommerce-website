import {createStore} from  'redux'
import { combineReducers } from 'redux';
import ProductReducers from "./reducers/ProductReducers"
import CartReducers from "./reducers//CartReducers"
const root = combineReducers ({
    ProductReducers,CartReducers
});

const store = createStore(root)
export default store;

