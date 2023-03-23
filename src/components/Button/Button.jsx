import React from "react";

const Button = ({ price, onClick, innerText }) => {
	return (
		<div className="flex ">
			<div className="p-3 text-xl font-bold">${price}</div>
			<button
				onClick={onClick}
				className="flex cursor-pointer items-center justify-center bg-accent p-3 font-bold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
				{innerText}
			</button>
		</div>
	);
};

export default Button;
