import React from "react";

// Component from tailblocks.cc
const ContactUs = () => {
	return (
		<section className="body-font relative text-gray-600">
			<div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
				<div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
					<iframe
						className="absolute inset-0"
						title="map"
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						width="100%"
						height="100%"></iframe>
					<div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
						<div className="px-6 lg:w-1/2">
							<h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
								ADDRESS
							</h2>
							<p className="mt-1">
								Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
							</p>
						</div>
						<div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
							<h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
								EMAIL
							</h2>
							<address className="leading-relaxed text-accent">example@email.com</address>
							<h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
								PHONE
							</h2>
							<p className="leading-relaxed">123-456-7890</p>
						</div>
					</div>
				</div>
				<div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
					<h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
					<p className="mb-5 leading-relaxed text-gray-600">
						Post-ironic portland shabby chic echo park, banjo fashion axe
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="text-sm leading-7 text-gray-600">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-accent"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="text-sm leading-7 text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-accent"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="message" className="text-sm leading-7 text-gray-600">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-accent"></textarea>
					</div>
					<button className="rounded border-0 bg-accent py-2 px-6 text-lg text-white hover:bg-red-500 focus:outline-none">
						Send Feedback
					</button>
					<p className="mt-3 text-xs text-gray-500">
						Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
