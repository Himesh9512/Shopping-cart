import React from "react";

import BikeItem from "../components/BikeItem/BikeItem";
import ProductSection from "../components/ProductSection/ProductSection";

import { bikes } from "../utils/data/data";
const Shop = () => {
	return (
		<main className="flex">
			<div className="max-h-[90vh] flex-1 overflow-scroll border-r-4 border-black">
				{bikes.map((bike) => {
					return <BikeItem bike={bike} />;
				})}
			</div>
			<ProductSection bike={bikes[4]} />
		</main>
	);
};

export default Shop;
