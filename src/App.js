import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./Route";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<MainRoute />
		</BrowserRouter>
	);
}

export default App;
