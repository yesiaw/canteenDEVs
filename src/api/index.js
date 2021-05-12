import axios from "axios";

import categories from './categories.json'
import dish1 from './dish1.json'

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const getCategory = async () => {
	// debugger
	// const res = await instance.get(`categories`);
	let res = {}
	res.data = categories;
	return res;

};




export const getDishes = async (id) => {
	// const res = await instance.get(`categories/${id}`);
	let res = {}
	
	res = categories.find((el) => {
		return el.id == id
	});

	
	return res;
};
