import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopProvider from '../context/shopContext';
import HomePage from '../pages/HomePage';
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';

import ProductPage from '../pages/ProductPage';
import AllProducts from '../pages/AllProducts';
import About from '../pages/About';
import Sizing from '../pages/Shipping';
import Shipping from '../pages/Sizing';

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
	return (
		<ShopProvider>
			<StyletronProvider value={engine} debug={debug} debugAfterHydration>
				<Router>
					<Navbar />
					<Cart />
					<Switch>
						<Route path="/All" component={AllProducts} />

						<Route path="/product/:id" component={ProductPage} />

						<Route path="/About" component={About} />

						<Route path="/Sizing" component={Sizing} />

						<Route path="/Shipping" component={Shipping} />

						<Route path="/" component={HomePage} />
					</Switch>
					<Footer />
				</Router>
			</StyletronProvider>
		</ShopProvider>
	);
}

export default App;
