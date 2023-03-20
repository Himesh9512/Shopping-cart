import React from "react";

import SpecItem from "./Spec";

const SpecsBottom = () => {
	return (
		<div className="flex h-[14vh] items-center justify-around border-t-4 border-black px-24 font-semibold">
			<div className="border-width border-accent px-3">
				<span className="block pl-0 text-2xl">PANIGALE V4</span>
				<span className="text-center text-xl text-accent">SPECIFICATION</span>
			</div>
			<SpecItem title="POWER" unit="HP" amount="215.5" />
			<SpecItem title="TORQUE" unit="Nm" amount="123.6" />
			<SpecItem title="WEIGHT" unit="KG" amount="175" />
		</div>
	);
};

export default SpecsBottom;
