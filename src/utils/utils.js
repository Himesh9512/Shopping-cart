import { bikes } from "./data/data";

export const getBike = (id) => {
	const bike = bikes.find((x) => x.id === id);
	return bike;
};

export const totalPrice = (shoppingCart) => {
	let newCart = [...shoppingCart];
	if (!newCart) return 0;
	let total = newCart.reduce((total, bike) => {
		return total + bike.price * bike.quantity;
	}, 0);
	return total;
};
