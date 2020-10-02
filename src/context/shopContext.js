import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
	domain: 'bunnyfields.myshopify.com',
	storefrontAccessToken: '106544c40c49f690f352e286d0865510'
});

class ShopProvider extends Component {
	state = {
		products: [],
		product: {},
		checkout: {},
		isCartOpen: false,
		test: 'test'
	};
	componentDidMount() {
		this.createCheckout();
		//Check if localStorage has a checkout_id saved
		if (localStorage.checkout) {
			this.fetchCheckout(localStorage.checkout);
		} else {
			this.create.createCheckout();
		}
		//if there is not checkout_id in localStorage then we will create a new checkout

		// else fecth the checkout from shopify
	}

	createCheckout = async () => {
		const checkout = await client.checkout.create();
		localStorage.setItem('checkout', checkout.id);
		await this.setState({ checkout: checkout });
	};

	fetchCheckout = async (checkoutId) => {
		client.checkout
			.fetch(checkoutId)
			.then((checkout) => {
				if (checkout == null) {
					return this.setState({ checkout: null });
				}
				this.setState({ checkout: checkout });
			})
			.catch((err) => console.log(err));
	};

	addItemToCheckout = async (variantId, quantity) => {
		const lineItemsToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10)
			}
		];
		const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
		this.setState({ checkout: checkout });
	};
	removeLineItemInCart = async (lineItemId) => {
		client.checkout.removeLineItems(this.state.checkout.id, [lineItemId]).then((res) => {
			this.setState({
				checkout: res
			});
		});
	};
	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		this.setState({ products: products });
	};
	fetchProductWithId = async (id) => {
		const product = await client.product.fetch(id);
		this.setState({ product: product });
	};
	closeCart = () => {
		this.setState({ isCartOpen: false });
	};
	openCart = () => {
		this.setState({ isCartOpen: true });
	};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					fetchAllProducts: this.fetchAllProducts,
					fetchProductWithId: this.fetchProductWithId,
					closeCart: this.closeCart,
					openCart: this.openCart,
					addItemToCheckout: this.addItemToCheckout,
					removeLineItemInCart: this.removeLineItemInCart
				}}
			>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}
const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
