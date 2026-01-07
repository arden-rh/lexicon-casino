import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CoinProvider } from "./contexts/CoinContext";

import Home from "./pages/Home/Home"
import Game from "./pages/Game/Game";
import Balance from "./pages/Balance/Balance";

const App = () => {
	return (
		<CoinProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/game" element={<Game />} />
						<Route path="/balance" element={<Balance />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</CoinProvider>
	);
};

export default App;
