import { bikes } from "./data/data";

export const getBike = (id) => {
	const bike = bikes.find((x) => x.id === id);
	return bike;
};
