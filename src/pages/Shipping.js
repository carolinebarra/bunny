import React from 'react';

import { Div, Button, Row, Col, Container } from 'atomize';

import bee from '../images/bee.png';
import packing from '../images/shipping.JPG';

import styled from 'styled-components';

const StyledContainer = styled(Container)`
	height: 100%;
	max-height: 75%;
	text-decoration: none;
	max-width: 60%;

	overflow: hidden;
	color: #e94f35;
	h1 {
		font-size: 50px;
		font-family: cooper-black-std;
	}
	h2 {
		margin: 15px;
	}
`;

const StyledText = styled(Div)`
	color: '#e94f35';
	font-weight: 400 !important;
	-webkit-text-stroke-width: medium;
	font-size: 1.5rem;

	padding: 1rem;
	text-align: justify;
`;

const Shipping = () => {
	return (
		<StyledContainer>
			<Div d="flex" justify={{ xs: 'center', lg: 'center' }}>
				<Row p={{ t: '10rem' }} maxW="100%">
					<Button
						h="3.5rem"
						textSize={{ xs: 'title', md: 'display1' }}
						textWeight="300"
						w="75rem"
						bg="#c6d5a1"
						align="center"
						fontFamily="cooper-black-std"
						style={{ '-webkit-text-stroke-width': 'thin' }}
					>
						Shipping and returns
					</Button>

					<Div
						w={{ xs: '20rem', md: '35rem' }}
						h={{ xs: '20rem', md: '35rem' }}
						m="1rem"
						bgImg={packing}
						bgSize="cover"
						bgPos="center center"
					/>

					<Col flexDir={{ xs: 'row', md: 'column' }}>
						<h2>Delivery </h2>
						<StyledText>
							We ship worldwide and aim to process orders within the next day. All orders are sent with
							Tracking and signature.{' '}
							<StyledText>
								- All UK orders cost £3.60 and should be with you in 1-2 days working days.
							</StyledText>
							<StyledText>
								- International orders cost £9.50. EU shipping takes approximately 3-5 working days and
								everywhere else 5-7 working days.
							</StyledText>
							Please note that when ordering from outside the EU you may need to pay customs and/or taxes
							once your parcel arrives in your country.
						</StyledText>
					</Col>
					<Div
						h="80px"
						w="100px"
						m={{ l: { xs: '12rem', md: '60rem' } }}
						bgImg={bee}
						bgSize="cover"
						bgPos="center center"
					/>

					<Row>
						<h2>Returns</h2>
						<StyledText>
							If you are not 100% happy with your purchase, you can return it to us in its original and
							unworn condition, just write us at hello@bunnyfields.co.uk so we can tell you our address!
						</StyledText>
					</Row>
				</Row>
			</Div>
		</StyledContainer>
	);
};

export default Shipping;
