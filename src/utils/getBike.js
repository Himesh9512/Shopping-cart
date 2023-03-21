import { bikes } from "./data/data";

export const getBike = (id) => {
	console.log("id", id);
	const bike = bikes.find((x) => x.id === id);
	return bike;
};
