/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#ea0b13",
			},
			fontFamily: {
				orbitron: "Orbitron",
				"maven-pro": "Maven Pro",
			},
		},
	},
	plugins: [],
};
