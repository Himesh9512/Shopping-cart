import React from "react";

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
			<div className="h-[12vh] border-t-4 border-black">bottom</div>
		</div>
	);
};

export default Home;
