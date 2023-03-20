import React from "react";

const SpecItem = ({ title, unit, amount }) => {
	return (
		<div>
			<span className="text-base text-accent">{title}</span>
			<span className="block text-3xl">
				{amount} {unit}
			</span>
		</div>
	);
};

export default SpecItem;
