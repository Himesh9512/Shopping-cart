import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./MainRoute";

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);
	const addBikeToCart = (bike) => {
		const bikeIndex = shoppingCart.indexOf(bike);
		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			newCart[bikeIndex].quantity++;

			setShoppingCart(newCart);
		} else {
			setShoppingCart([...shoppingCart, bike]);
		}
	};

	const removeBikeFromCart = (bike) => {
		const bikeIndex = shoppingCart.indexOf(bike);
		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			newCart[bikeIndex].quantity--;

			setShoppingCart(newCart);
		} else {
			console.error("no bike found!");
		}
	};
	return (
		<BrowserRouter>
			<Navbar />
			<MainRoute
				shoppingCart={shoppingCart}
				addbikeToCart={addBikeToCart}
				removeBikeFromCart={removeBikeFromCart}
			/>
		</BrowserRouter>
	);
}

export default App;
