import { getCategory } from "../../../../api";

const SET_CATEGORY = "SET_CATEGORY";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
	isFetching: true,
	categories: [],
};

export default function categoryReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CATEGORY:
			return { ...state, categories: action.payload, isFetching: false };
		case SET_IS_FETCHING:
			return { ...state, isFetching: action.payload };
		default:
			return state;
	}
}

const setCategory = (category) => ({
	type: SET_CATEGORY,
	payload: category,
});
const setIsFetching = (bool) => ({
	type: SET_IS_FETCHING,
	payload: bool,
});

export const getCat = () => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		const response = await getCategory();
		dispatch(setCategory(response.data));
	};
};
