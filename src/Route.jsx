import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";
import ProductSection from "./components/ProductSection/ProductSection";
import NotFound from "./routes/NotFound";

const MainRoute = ({ addItemToCart }) => {
	return (
		<main className="max-w-screen w-screen font-maven-pro">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />}>
					<Route path="/shop/:id" element={<ProductSection addItemToCart={addItemToCart} />} />
				</Route>
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default MainRoute;
