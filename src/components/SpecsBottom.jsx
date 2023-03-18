import React from "react";

const SpecsBottom = () => {
	return (
		<div className="flex h-[14vh] items-center justify-between border-t-4 border-black px-24 font-semibold">
			<div className="border-width border-accent pl-1">
				<span className="block p-1 pl-0 text-2xl">PANIGALE V4</span>
				<span className="text-xl text-accent">SPECIALE</span>
			</div>
			<div>
				<span className="text-base text-accent">POWER</span>
				<span className="block text-3xl">215.5 HP</span>
			</div>
			<div>
				<span className="text-base text-accent">TORQUE</span>
				<span className="block text-3xl">123.6 Nm</span>
			</div>
			<div>
				<span className="text-base text-accent">WEIGHT</span>
				<span className="block text-3xl">175 KG</span>
			</div>
		</div>
	);
};

export default SpecsBottom;
