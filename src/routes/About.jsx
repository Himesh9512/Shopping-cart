import React from "react";

import Banner from "../assets/images/banner.jpg";
import ContactUs from "../components/ContactUs/ContactUs";

const About = () => {
	return (
		<main>
			<div>
				<div className="absolute top-1/3 pl-7 text-8xl text-white">Ducati at glance!</div>
				{/* https://unsplash.com/@gixxerkidd */}
				<img src={Banner} alt="banner" />
				<big>
					credit:{" "}
					<a href="https://unsplash.com/@gixxerkidd" className="text-accent">
						@gixxerkidd
					</a>
				</big>
			</div>
			<section className="m-auto w-1/2 p-5 text-justify text-lg leading-8">
				<h2 className="my-7 text-center text-4xl font-extrabold">About us</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repudiandae vel
					similique consequuntur quidem, iste beatae qui nisi odio necessitatibus. Voluptatum beatae
					fuga facilis minus autem omnis iste ad at dolore voluptatibus ratione aliquam perferendis
					sit vero, pariatur delectus? Earum architecto quos, aliquid illo voluptates numquam
					maiores temporibus nobis blanditiis!
				</p>
				<br></br>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto blanditiis aliquid, neque
					numquam repellendus reiciendis mollitia obcaecati eum hic ut dolores, velit suscipit sequi
					magni. Facilis cumque saepe nulla rem maxime facere labore eius porro voluptatibus
					inventore. Molestiae voluptatum, praesentium accusamus provident adipisci officia, quasi
					nesciunt illo, qui expedita ullam labore ut omnis. Architecto voluptas distinctio
					temporibus iure. Vero, dignissimos?
				</p>
			</section>
			<h2 className="mt-10 text-center text-4xl font-extrabold">Contact Us</h2>
			<ContactUs />
		</main>
	);
};

export default About;
