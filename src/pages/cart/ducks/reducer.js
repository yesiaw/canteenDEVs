const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState = {
	cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") 
};

export default function cartReducer( state = initialState, action ) {
    switch (action.type) {
      case ADD_TO_CART:
        return { cartItems: action.payload.cartItems };
      case REMOVE_FROM_CART:
        return { cartItems: action.payload.cartItems };
      default:
        return state;
    }
};

const setAddToCart = (cart) => ({ type: ADD_TO_CART, payload: cart });
const setRemoveFromeCart = (cart) => ({ type: REMOVE_FROM_CART, payload: cart });


// Functions=======================================================================
export const addToCart = (product) => {
  
	return async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice()
    let alreadyExists = false;
    cartItems.forEach((x) => {
      if (x.id === product.id) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, count: 1 });
    }
    dispatch(setAddToCart({cartItems}));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
};

export const removeFromCart = (product) => {
    return async (dispatch, getState) => {
        const cartItems = getState().cart.cartItems.slice().filter((x) => x.id !== product.id);
        dispatch(setRemoveFromeCart({cartItems}));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
}

export const removeOneFromCart = (product) => {
  return async (dispatch, getState) => {
      let cartItems = getState().cart.cartItems.slice();
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.count === 1) {
        cartItems = cartItems.filter((x) => x.id !== product.id);        
      } else {
        cartItems = cartItems.map((x) => x.id === product.id ? { ...exist, count: exist.count - 1 } : x )
      }
      dispatch(setRemoveFromeCart({cartItems}));
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
}

