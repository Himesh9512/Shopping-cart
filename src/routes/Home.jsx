import React from "react";

import SpecsBottom from "../components/SpecsBottom";

import Panigale from "../assets/panigale.jpg";

const Home = () => {
	return (
		<div className="flex h-screen max-h-[90vh] w-full flex-col justify-end">
			<div
				className="background flex h-full w-full justify-end"
				style={{
					backgroundImage: `url(${Panigale})`,
				}}>
				<div></div>
			</div>
			<SpecsBottom />
		</div>
	);
};

export default Home;
