import { createStore } from 'redux';

// 1. reducer
const cartReducer = (state = { cart: [{ id: 1, qty: 2 }] }, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		default:
			return state;
	}
};

// 2. store
const store = createStore(cartReducer);
console.log('oncreate store: ', store.getState());

// 3. subscribe

// 4. dispatch
