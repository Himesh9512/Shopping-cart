import React from "react";

import AddToCartButton from "./AddToCartButton";
import TechSpec from "./TechSpec";

import { getBike } from "../../utils/getBike";
import { useParams } from "react-router-dom";

const ProductSection = ({ addItemToCart }) => {
	const params = useParams();
	const bike = getBike(parseInt(params.id));

	const handleOnClick = () => {
		addItemToCart({ ...bike, quantity: 1 });
	};

	return (
		<React.Fragment>
			<div className="flex w-full justify-center border-b-4 border-b-black font-orbitron text-2xl font-bold uppercase">
				{bike.name}
			</div>
			<div className="mt-6 flex w-2/3 flex-col items-center justify-center">
				<div className="flex justify-center gap-32">
					<TechSpec title="POWER" unit="HP" amount={bike.power} />
					<TechSpec title="DISPLACEMENT" unit="cc" amount={bike.displacement} />
					<TechSpec title="TORQUE" unit="Nm" amount={bike.torque} />
					<TechSpec title="WEIGHT" unit="KG" amount={bike.weight} />
				</div>
				<img src={bike.image} alt={bike.name} className="flex h-auto w-96" />
				<p className="my-4 h-32 text-justify text-lg">{bike.description}</p>
				<AddToCartButton price={bike.price} onClick={handleOnClick} />
			</div>
		</React.Fragment>
	);
};

export default ProductSection;
