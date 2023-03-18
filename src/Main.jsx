import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";

const Main = () => {
	return (
		<main className="max-w-screen w-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />}>
					<Route path={`/shop/:id>`} />
				</Route>
				<Route path="/about" element={<About />} />
			</Routes>
		</main>
	);
};

export default Main;
