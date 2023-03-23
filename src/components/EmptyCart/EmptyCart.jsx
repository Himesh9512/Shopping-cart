import React from "react";

import { Link } from "react-router-dom";

const EmptyCart = () => {
	return (
		<div className="grid h-[80vh] place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
			<div className="text-center">
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					Empty Cart
				</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">
					Hello! It looks like your cart is empty. Why not go ahead and buy something?
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						to="/shop"
						className=" bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
						SHOP
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;
