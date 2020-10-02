import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Button, Row, Col, Container, ThemeProvider } from 'atomize';
import styled from 'styled-components';
import bunny from '../images/bunny.gif';

const theme = {
	fontFamily: {
		primary: 'cooper-black-std'
	}
};

const StyledContainer = styled(Container)`
	color: #e94f35;
	font-size: 1.28571rem;
	-webkit-text-stroke-width: medium;
	font-weight: 400 !important;
	letter-spacing: 0.5px;
	max-width: 70%;
	padding-bottom: 6rem;

	.size {
		display: flex;
		padding: 10px;
		@media (max-width: 414px) {
			margin-left: 3rem;
		}
		button {
			background: white;
			color: #fcd9ca;
			border: 0;

			padding: 1px 6px;
			height: 2.5rem;
			font-size: 2.5rem;
			font-family: cooper-black-std;
			cursor: pointer;
			padding-right: 1rem;
			-webkit-appearance: none;
			outline: none;
			&:focus,
			&:hover,
			&:link,
			&:active {
				text-decoration-line: underline;
				border-color: #c6d5a1;
				border-style: none;
				-webkit-appearance: none;
				outline: none;
			}
		}
	}
`;

const LoadingImage = styled.img`
	width: 100%;
	display: block;
	max-width: 100%;
	border: 0 none;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	z-index: 0;
	height: 100vh;
`;
const StyledText = styled.h1`
	font-family: cooper-black-std;
	font-size: 2.5rem;
	padding: 10px;

	margin-bottom: 0px;
	p {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-size: 30.57px;
	}
`;

const ProductPage = () => {
	let { id } = useParams();

	const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);

	useEffect(() => {
		fetchProductWithId(id);
		return () => {};
	}, [fetchProductWithId, id]);

	if (!product.title)
		return (
			<div>
				<LoadingImage src={bunny} alt="loading" />
			</div>
		);

	return (
		<StyledContainer maxW="75%">
			<Row p={{ t: '10rem' }}>
				<Col maxW="20%">
					<Div
						bgImg={product.images[0].src}
						bgSize="cover"
						bgPos="center center"
						w={{ xs: '3rem', md: '12rem' }}
						h={{ xs: '5rem', md: '15rem' }}
						m={{ y: { xs: '1rem' }, l: { xs: '-2rem' } }}
					/>
					<Div
						bgImg={product.images[1].src}
						bgSize="cover"
						bgPos="center center"
						w={{ xs: '3rem', md: '12rem' }}
						h={{ xs: '5rem', md: '15rem' }}
						m={{ y: { xs: '1rem' }, l: { xs: '-2rem' } }}
					/>
					<Div
						bgImg={product.images[2].src}
						bgSize="cover"
						bgPos="center center"
						w={{ xs: '3rem', md: '12rem' }}
						h={{ xs: '5rem', md: '15rem' }}
						m={{ y: { xs: '1rem' }, l: { xs: '-2rem' } }}
					/>
				</Col>
				<Col>
					<Div
						bgImg={product.images[0].src}
						bgSize="cover"
						bgPos="center center"
						w={{ xs: '12rem', md: '35rem' }}
						h={{ xs: '19rem', md: '45rem' }}
					/>
				</Col>
				<Col>
					<StyledText p="10px">
						{product.title}
						<Text>£{product.variants[0].price}</Text>
					</StyledText>

					<Div p="10px" textAlign="justify">
						{product.descriptionHtml
							.replace(/<\/p>/gi, '\n')
							.replace(/<br\s*[\\/]?>/gi, '\n')
							.replace(/<[^>]+>/gi, '')}
					</Div>
					<div className="size">
						{product.options[0].values.map((value, i) => {
							return (
								<button
									onClick={() => {
										addItemToCheckout(product.variants[i].id, 1);
									}}
								>{`${product.options[0].values[i].value}`}</button>
							);
						})}
					</div>

					<ThemeProvider theme={theme}>
						<Button
							onClick={() => {
								openCart();
							}}
							m="11px"
							textSize="title"
							textWeight="300"
							w={{ xs: '15rem', md: '33rem' }}
							bg="#c6d5a1"
							align="center"
							fontFamily="primary"
							style={{ '-webkit-text-stroke-width': 'thin' }}
						>
							add to basket
						</Button>
					</ThemeProvider>
				</Col>
			</Row>
		</StyledContainer>
	);
};

export default ProductPage;
