import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Cart = ({ shoppingCart, addBikeaToCart, removeBikeFromCart }) => {
	return (
		<main className="h-full w-full">
			<div className="max-w-screen flex h-[90vh] w-full flex-col">
				<div className="flex-[8] ">{shoppingCart.map((bike) => {})}</div>
				<div className="flex flex-1 items-center justify-between border-t-4 border-t-black px-10">
					<Link to="/shop">
						<button className="text">BACK TO SHOP</button>
					</Link>
					<Button price="999" onClick={() => alert("Vapas mat aana!")} innerText="PURCHASE" />
				</div>
			</div>
		</main>
	);
};

export default Cart;
