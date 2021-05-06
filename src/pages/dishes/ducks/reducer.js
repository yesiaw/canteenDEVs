import { getDishes } from "../../../api";

const SET_DISH = "SET_DISH";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
	isFetching: true,
	dishes: [],
};

export default function dishReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DISH:
			return { ...state, dishes: action.payload, isFetching: false };
		case SET_IS_FETCHING:
			return { ...state, isFetching: action.payload };
		default:
			return state;
	}
}

export const setDish = (dish) => ({ type: SET_DISH, payload: dish });
export const setIsFetching = (bool) => ({
	type: SET_IS_FETCHING,
	payload: bool,
});

export const getDish = (id) => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		const response = await getDishes(id);
		dispatch(setDish(response.data));
	};
};
