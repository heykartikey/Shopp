import { combineReducers } from "redux"
import { productReducer, selectedProductReducer } from "./product-reducer"

const reducers = combineReducers({
    data: productReducer,
    selected: selectedProductReducer
})

export default reducers
