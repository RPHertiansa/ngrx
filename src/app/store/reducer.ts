// handling removing and adding product in the cart

//reducer will contain reducer function acceptiong previous state and current dispatched action as parameters

import { CallTracker } from 'assert';
import { CartActionTypes, CartActions} from './actions'

export let initialState = []

export function reducer(state=initialState, action: CartActions ) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return [...state, action.payload]
        case CartActionTypes.REMOVE_PRODUCT:
            let product = action.payload
            return state.filter((el) => el.id != product.id)    
        default:
            return state;
    }
}