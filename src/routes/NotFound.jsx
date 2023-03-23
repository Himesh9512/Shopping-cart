import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="font-maven-pro text-2xl font-semibold text-accent">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">
						Sorry, we couldn't find the page you're looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							to="/"
							className=" bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
							Go back home
						</Link>
						<Link to="/shop" className="text-sm font-semibold text-gray-900">
							Shop <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

export default NotFound;
