import React from "react";

const BikeItem = ({ bike }) => {
	return (
		<div className="flex cursor-pointer flex-col items-center p-3 ">
			<img src={bike.image} alt={bike.name} className="flex h-auto w-4/5 justify-center" />
			<div className="mt-2 text-center text-lg font-bold uppercase">{bike.name}</div>
		</div>
	);
};

export default BikeItem;
