import React from "react";

import AddToCartButton from "./AddToCartButton";
import TechSpec from "./TechSpec";

const ProductSection = ({ bike }) => {
	return (
		<React.Fragment>
			<div className="flex w-2/3 flex-col items-center justify-center">
				<div className="flex justify-center gap-32">
					<TechSpec title="POWER" unit="HP" amount={bike.power} />
					<TechSpec title="DISPLACEMENT" unit="cc" amount={bike.displacement} />
					<TechSpec title="TORQUE" unit="Nm" amount={bike.torque} />
					<TechSpec title="WEIGHT" unit="KG" amount={bike.weight} />
				</div>
				<img src={bike.image} alt={bike.name} className="flex h-auto w-2/5" />
				<p className="my-11 text-justify text-lg">{bike.description}</p>
				<AddToCartButton price={bike.price} onClick={() => {}} />
			</div>
		</React.Fragment>
	);
};

export default ProductSection;
