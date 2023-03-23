import React from "react";

const CartItem = ({ bike, addBikeToCart, removeBikeFromCart }) => {
	const handleOnClick = (e) => {
		if (e.target.innerHTML === "add") {
			addBikeToCart(bike);
		} else if (e.target.innerHTML === "remove") {
			removeBikeFromCart(bike);
		} else {
			removeBikeFromCart(bike, true);
		}
	};

	return (
		<div
			className="flex h-fit w-fit flex-col items-center justify-between border-2 border-black p-2 pt-1"
			key={bike.id}>
			<span className="font-orbitron text-base font-semibold uppercase">{bike.name}</span>
			<div className="flex border-2 border-black ">
				<img src={bike.image} alt={bike.name} />
			</div>
			<div className="flex w-full justify-between text-xl">
				<span className="font-bold">Price:</span>
				<span>${bike.price}</span>
			</div>
			<div className="my-2 flex w-full justify-evenly">
				<button className="flex border-2 border-black" onClick={(e) => handleOnClick(e)}>
					<span className="material-icons">remove</span>
				</button>
				<span className="text-2xl font-bold">{bike.quantity}</span>
				<button className="flex border-2 border-black" onClick={(e) => handleOnClick(e)}>
					<span className="material-icons">add</span>
				</button>
			</div>
			<button className="w-full bg-accent text-white" onClick={(e) => handleOnClick(e)}>
				<span className="material-icons">remove_shopping_cart</span>
			</button>
		</div>
	);
};

export default CartItem;
