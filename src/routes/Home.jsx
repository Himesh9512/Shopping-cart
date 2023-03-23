import React from "react";

import SpecsBottom from "../components/SpecsBottom/SpecsBottom";

import Panigale from "../assets/panigale.jpg";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex h-screen max-h-[90vh] w-full flex-col justify-end">
			<div
				className="background flex h-full w-full flex-col items-start justify-center pl-36"
				style={{ backgroundImage: `url(${Panigale})` }}>
				<div className="mb-32">
					<div className="text-4xl">THE EVOLUTION OF SPEED</div>
					<div className="font-extraboldbold font-orbitron text-8xl">
						PANIGALE <span className="text-accent">V</span>4
					</div>
				</div>
				<Link to="/shop/4">
					<button className="flex items-center justify-center bg-accent p-3 font-bold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
						DISCOVER MORE <span className="material-icons">keyboard_double_arrow_right</span>
					</button>
				</Link>
			</div>
			<SpecsBottom />
		</div>
	);
};

export default Home;
