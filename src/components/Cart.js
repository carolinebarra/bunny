import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ShopContext } from '../context/shopContext';
import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Icon } from 'atomize';
import styled from 'styled-components';

const StyledText = styled.div`
	font-family: cooper-black-std;
	font-size: 2.5rem;
	padding: 10px;
	color: #e94f35;

	h1 {
		font-size: x-large;
	}
	p {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-size: x-large;
	}
	.size {
		font-size: x-large;
		color: #fcd9ca;
		margin: 0px 0px -15px 0px;
	}
`;

const Cart = () => {
	let { id } = useParams();
	const { isCartOpen, closeCart, checkout, fetchProductWithId, removeLineItemInCart } = useContext(ShopContext);
	useEffect(() => {
		fetchProductWithId(id);
		return () => {};
	}, [fetchProductWithId, id]);

	if (!checkout)
		return (
			<div>
				<Text>test</Text>
			</div>
		);
	return (
		<SideDrawer isOpen={isCartOpen} onClose={closeCart} p="1rem" w={{ xs: '23rem', md: '33rem' }}>
			<StyledText>shopping basket:</StyledText>
			<Div d="flex" flexDir="column" m={{ b: '4rem' }}>
				{checkout.lineItems &&
					checkout.lineItems.map((item, i) => (
						<Row key={item.id.toString()}>
							<Div
								bgImg={item.variant.image.src}
								bgSize="cover"
								bgPos="center center"
								h="6rem"
								w="6rem"
								m={{ y: '1rem' }}
							/>
							<Col>
								<StyledText>
									<h1>{item.title}</h1>
									<p className="size">Size {item.variant.title.toString().toUpperCase()}</p>
									<p>{item.quantity}</p>
								</StyledText>
							</Col>
							<Anchor
								onClick={() => removeLineItemInCart(item.id)}
								m={{ r: { xs: '-5rem', md: '-4rem' } }}
							>
								<Icon name="Cross" color="#fcd9ca" size="25px" pos="STICKY" top="5rem" left="22rem" />
							</Anchor>

							<Text textAlign="center" p={{ t: '5rem' }} textSize="x-large">
								£{item.variant.price}
							</Text>
						</Row>
					))}
				<Text textColor="#e94f35" textAlign="right" p={{ t: '5rem' }} textSize="x-large">
					subtotal: £{checkout.totalPrice}
				</Text>
				<Anchor href={checkout.webUrl} target="_blank">
					<Button
						m="11px"
						textSize="title"
						textWeight="300"
						w={{ xs: '20rem', md: '28rem' }}
						bg="#c6d5a1"
						align="center"
						style={{ '-webkit-text-stroke-width': 'thin', 'font-family': 'cooper-black-std' }}
					>
						{' '}
						Checkout
					</Button>
				</Anchor>
			</Div>
		</SideDrawer>
	);
};

export default Cart;
