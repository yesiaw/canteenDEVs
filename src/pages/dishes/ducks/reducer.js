import { getCategory, getDishes } from "../../../api";

const SET_DISH = "SET_DISH";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CATEGORY = "SET_CATEGORY";
const CLEAR_DISH = "CLEAR_DISH"

const initialState = {
	isFetching: true,
	dishes: [],
	categories: []
};

export default function dishReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DISH:
			const dishIndex = state.dishes.findIndex((dish) => dish.name === action.payload.name)
			if (dishIndex == -1) {
				return {
					...state,
					dishes: [...state.dishes, action.payload],
					isFetching: false
				}
			}
		case SET_IS_FETCHING:
			return { ...state, isFetching: action.data };
			
		case SET_CATEGORY:
			return { 
				...state,
				categories: action.data
			};
		case CLEAR_DISH:
			return { 
				...state,
				dishes: action.data
			};

		default:
			return state;
	}
}

const setDish = (dish) => ({ type: SET_DISH, payload: dish });
const setIsFetching = (data) => ({ type: SET_IS_FETCHING, data });
const setCategory = (data) => {
	return {type: SET_CATEGORY, data }
}
const removeDishes = () => ({type:CLEAR_DISH , data: []})


export const getDish = (id) => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		const response = await getDishes(id);
		dispatch(setDish(response));
		dispatch(setIsFetching(false));
	};
};

export const getCategories = () => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		const response = await getCategory();
		dispatch(setCategory(response.data))
		dispatch(setIsFetching(false));
		
	}
}

export const clearDishes = () => {
	
	return (dispatch) => {
		dispatch(removeDishes())
	}
}






