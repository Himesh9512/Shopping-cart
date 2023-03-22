import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./Route";

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);
	const addItemToCart = (bike) => {
		const bikeIndex = shoppingCart.indexOf(bike);
		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			newCart[bikeIndex].quantity++;

			setShoppingCart(newCart);
		} else {
			setShoppingCart([...shoppingCart, bike]);
		}
	};

	const removeItemFromCart = (bike) => {
		const bikeIndex = shoppingCart.indexOf(bike);
		if (bikeIndex > -1) {
			const newCart = [...shoppingCart];
			newCart[bikeIndex].quantity--;

			setShoppingCart(newCart);
		} else {
			console.error("no item found!");
		}
	};
	return (
		<BrowserRouter>
			<Navbar />
			<MainRoute addItemToCart={addItemToCart} />
		</BrowserRouter>
	);
}

export default App;
