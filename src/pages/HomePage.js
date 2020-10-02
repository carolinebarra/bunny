import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Row, Col } from 'atomize';
import background from '../images/landing-page.jpg';
import bunny from '../images/bunny.gif';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	max-height: 100%;
	text-decoration: none;

	max-width: 100%;
	overflow: hidden;

	h1 {
		font-size: 50px;
		font-family: cooper-black-std;
	}
`;
const CollectionImage = styled.img`
	width: 100%;
	display: block;
	max-width: 100%;
	border: 0 none;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	z-index: 0;
	height: 80vh;
	@media (max-width: 414px) {
		width: -webkit-fill-available;
		height: 77vh;
	}
`;
const StyledText = styled(Text)`
	color: '#e94f35';
	font-weight: 400 !important;
	-webkit-text-stroke-width: medium;
	font-size: 1.28571rem;
	letter-spacing: 0.5px;

	text-decoration: none;
	&:focus,
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

const HomePage = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);
	const size = 4;
	useEffect(() => {
		fetchAllProducts();
		return () => {};
	}, [fetchAllProducts]);

	if (!products)
		return (
			<div>
				<CollectionImage src={bunny} alt="loading" />
			</div>
		);
	return (
		<Container>
			<CollectionImage src={background} alt="collection" />
			<Row justify={{ xs: 'center', lg: 'center' }}>
				<h1>fresh in!</h1>
			</Row>
			<Row flexDir={{ xs: 'column', lg: 'row' }}>
				{products.slice(0, size).map((product) => (
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
								<StyledText m={{ y: '10px' }} w={{ xs: '20rem' }} textAlign={{ xs: 'center' }}>
									{product.title}
								</StyledText>
								<Text
									textColor="#e94f3"
									w={{ xs: '20rem' }}
									textAlign={{ xs: 'center' }}
									textSize="20px"
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

export default HomePage;
