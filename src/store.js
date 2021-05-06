import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./pages/cart/ducks/reducer";
import dishReducer from "./pages/dishes/ducks/reducer";
import categoryReducer from "./pages/main/categories/ducks/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	category: categoryReducer,
	dish: dishReducer,
	cart: cartReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk))
);
