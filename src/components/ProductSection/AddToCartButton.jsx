import React from "react";

const AddToCartButton = ({ price, onClick }) => {
	return (
		<div className="flex self-end">
			<div className="p-3 text-xl font-bold">${price}</div>
			<button
				onClick={onClick}
				className="flex cursor-pointer items-center justify-center bg-accent p-3 font-bold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
				ADD TO CART
			</button>
		</div>
	);
};

export default AddToCartButton;
