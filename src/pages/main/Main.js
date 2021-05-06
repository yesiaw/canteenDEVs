import React from "react";
import About from "./about/About";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Header from "./header/Header";

const Main = () => {
	return (
		<>
			<Header />
			<div style={{ margin: "0.6rem" }}>
				<Banner/>
				<Categories/>
				<About/>
			</div>
		</>
	);
};

export default Main;
