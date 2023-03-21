import React from "react";
import { Link, Outlet } from "react-router-dom";

import BikeItem from "../components/BikeItem/BikeItem";

import { bikes } from "../utils/data/data";
const Shop = () => {
	return (
		<main className="flex">
			<div className="max-h-[90vh] flex-1 overflow-scroll border-r-4 border-black">
				{bikes.map((bike) => {
					return (
						<Link key={bike.id} to={`/shop/${bike.id}`}>
							<BikeItem bike={bike} />;
						</Link>
					);
				})}
			</div>
			<div className="flex flex-[5] flex-col items-center justify-start">
				<Outlet />
			</div>
		</main>
	);
};

export default Shop;
