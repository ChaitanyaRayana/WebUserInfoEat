
import * as types from "./ActionType";



const initialState = {
    products: [],
    product: {},
    loading: false,
};

const CartItemreducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REMOVE_CART:
            return {
                ...state,
                loading: false,
            };
       

        default:
            return state;

    }
}

export default CartItemreducer;