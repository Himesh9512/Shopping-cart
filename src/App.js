import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./MainRoute";

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);
	const addBikeToCart = (bike) => {
		const bikeIndex = shoppingCart.findIndex((x) => x.id === bike.id);
		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			newCart[bikeIndex].quantity++;

			setShoppingCart(newCart);
		} else {
			setShoppingCart([...shoppingCart, bike]);
		}
	};

	const removeBikeFromCart = (bike, removeBike) => {
		const bikeIndex = shoppingCart.indexOf(bike);

		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			if (removeBike) {
				newCart.splice(bikeIndex, 1);
			} else {
				newCart[bikeIndex].quantity--;
			}

			setShoppingCart(newCart);
		} else {
			console.error("no bike found!");
		}
	};
	return (
		<HashRouter>
			<Navbar />
			<MainRoute
				shoppingCart={shoppingCart}
				addBikeToCart={addBikeToCart}
				removeBikeFromCart={removeBikeFromCart}
			/>
		</HashRouter>
	);
}

export default App;
