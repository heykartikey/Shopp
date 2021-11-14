import { ActionType } from "../constants/action-types"

const init = {
    products: [{
        id: 0,
        title: 'Loading...',
    }],
}

export const productReducer = (state = init, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}


export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state
    }
}
