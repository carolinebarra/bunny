import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Row, Col } from 'atomize';
import bunny from '../images/bunny.gif';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	overflow: hidden;
	color: #e94f35;
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
const StyledText = styled(Text)`
	color: #e94f35;
	-webkit-text-stroke-width: medium;
	font-weight: 400 !important;
	font-size: 1.28571rem;
	text-decoration: none;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const StyledLink = styled(Link)`
	color: #e94f35;
	text-decoration: none;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
const AllProducts = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);
	useEffect(() => {
		fetchAllProducts();
		return () => {};
	}, [fetchAllProducts]);

	if (!products)
		return (
			<div>
				<LoadingImage src={bunny} alt="loading" />
			</div>
		);
	return (
		<Container>
			<Row justify={{ xs: 'center', lg: 'center' }}>
				<h1>All</h1>
			</Row>
			<Row flexDir={{ xs: 'column', lg: 'row' }}>
				{products.map((product) => (
					<Col key={product.id} size="3">
						<StyledLink to={`/product/${product.id}`}>
							<Div p={{ xs: '2rem', lg: '2rem' }}>
								<Div
									h={{ xs: '20rem', lg: '20rem' }}
									w={{ xs: '20rem' }}
									bgImg={product.images[0].src}
									bgSize="cover"
									bgPos="center center"
								/>
								<StyledText
									m={{ y: '10px' }}
									w={{ xs: '20rem' }}
									textAlign={{ xs: 'center', lg: 'justify' }}
								>
									{product.title}
								</StyledText>
								<Text
									textColor="#e94f3"
									m={{ y: '10px' }}
									w={{ xs: '20rem', lg: '0' }}
									textAlign={{ xs: 'center' }}
								>
									£{product.variants[0].price}
								</Text>
							</Div>
						</StyledLink>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AllProducts;
