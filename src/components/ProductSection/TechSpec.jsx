import React from "react";

const TechSpec = ({ title, unit, amount }) => {
	return (
		<div className="font-bold">
			<span className="text-2xl text-accent">{title}</span>
			<span className="block text-center text-xl">
				{amount} {unit}
			</span>
		</div>
	);
};

export default TechSpec;
