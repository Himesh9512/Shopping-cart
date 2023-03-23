import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import CartButton from "./CartButton";

const Navbar = () => {
	return (
		<nav className="flex h-[10vh] items-center justify-between gap-8 border-b-4 border-black px-5">
			<img src={Logo} alt="logo" className="flex h-10 w-auto" />
			<ul className="flex flex-grow gap-8 font-maven-pro text-base font-semibold uppercase">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<Link to="/cart">
				<CartButton />
			</Link>
		</nav>
	);
};

export default Navbar;
