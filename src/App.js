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
		console.log(shoppingCart);
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
		console.log(shoppingCart);
	};
	return (
		<BrowserRouter>
			<Navbar />
			<MainRoute
				shoppingCart={shoppingCart}
				addBikeToCart={addBikeToCart}
				removeBikeFromCart={removeBikeFromCart}
			/>
		</BrowserRouter>
	);
}

export default App;
