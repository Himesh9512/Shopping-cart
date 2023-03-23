import React from "react";

import { Link } from "react-router-dom";

import Button from "../components/Button/Button";
import CartItem from "../components/CartItem/CartItem";
import EmptyCart from "../components/EmptyCart/EmptyCart";

import { totalPrice } from "../utils/utils";

const Cart = ({ shoppingCart, addBikeToCart, removeBikeFromCart }) => {
	const price = totalPrice(shoppingCart);

	return (
		<main className="h-full w-full">
			<div className="max-w-screen flex h-[90vh] w-full flex-col">
				{shoppingCart.length > 0 ? (
					<div className="grid flex-[8] grid-cols-5 justify-center gap-9 overflow-scroll p-7">
						{shoppingCart.map((bike) => {
							return (
								<CartItem
									key={bike.id}
									bike={bike}
									addBikeToCart={addBikeToCart}
									removeBikeFromCart={removeBikeFromCart}
								/>
							);
						})}
					</div>
				) : (
					<EmptyCart />
				)}
				<div className="flex flex-1 items-center justify-between border-t-4 border-t-black px-10">
					<Link to="/shop">
						<button className="text">BACK TO SHOP</button>
					</Link>
					<Button
						price={price}
						onClick={() => alert("Thank you for being part of Ducati <3")}
						innerText="PURCHASE"
					/>
				</div>
			</div>
		</main>
	);
};

export default Cart;
