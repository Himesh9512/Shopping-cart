import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
