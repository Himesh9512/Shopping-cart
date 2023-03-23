import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";
import ProductSection from "./components/ProductSection/ProductSection";
import NotFound from "./routes/NotFound";
import Cart from "./routes/Cart";

const MainRoute = ({ shoppingCart, addBikeToCart, removeBikeFromCart }) => {
	return (
		<main className="max-w-screen w-screen font-maven-pro">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />}>
					<Route path="/shop/:id" element={<ProductSection addBikeToCart={addBikeToCart} />} />
				</Route>
				<Route path="/about" element={<About />} />
				<Route
					path="/cart"
					element={
						<Cart
							shoppingCart={shoppingCart}
							addBikeToCart={addBikeToCart}
							removeBikeFromCart={removeBikeFromCart}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default MainRoute;
