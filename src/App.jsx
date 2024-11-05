import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import ScrollToTop  from "./component/scrollToTop";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./views/Details";

import { Favorites } from "./views/favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	const basename = import.meta.env.VITE_BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:type/:id" element={<Details />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

