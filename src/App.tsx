import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home"
import Game from "./pages/Game/Game";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game" element={<Game />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
