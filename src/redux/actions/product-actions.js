import { ActionType } from "../constants/action-types"

export const setProducts = products => ({
    type: ActionType.SET_PRODUCTS,
    payload: products
})

export const selectedProduct = product => ({
    type: ActionType.SELECTED_PRODUCT,
    payload: product
})

