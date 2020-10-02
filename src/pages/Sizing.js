import React from 'react';

import { Div, Button, Row, Container } from 'atomize';

import size from '../images/size-chart.JPG';

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
	padding-bottom: 8rem;
`;

const StyledText = styled(Div)`
	color: '#e94f35';
	font-weight: 400 !important;
	-webkit-text-stroke-width: medium;
	font-size: 1.5rem;

	margin-top: 4rem;
	padding: 2rem;
	text-align: justify;
	@media (max-width: 414px) {
		margin: 2rem 0 7rem 0;
	}
`;

const Sizing = () => {
	return (
		<StyledContainer>
			<Div d="flex" justify={{ xs: 'center', lg: 'center' }}>
				<Row p={{ t: '10rem' }} maxW="100%">
					<Button
						h="3.5rem"
						textSize="display1"
						textWeight="300"
						w="105rem"
						bg="#c6d5a1"
						align="center"
						fontFamily="cooper-black-std"
						style={{ '-webkit-text-stroke-width': 'thin' }}
					>
						Sizing
					</Button>

					<Row>
						<StyledText>
							If you are unsure about sizing, don’t hesitate to email us or send us a dm and we will help
							you out. You can also check our sizing chart below for guidance:
						</StyledText>

						<Div
							w={{ xs: '55rem', md: '70rem' }}
							h={{ xs: '24rem', md: '30rem' }}
							transform={{ xs: 'scale(0.4)', md: 'scale(1.0)' }}
							m={{
								r: { xs: '-17rem', md: '0' },
								y: { xs: '-15rem', md: '0' },
								l: { xs: '-17rem', md: '0' }
							}}
							bgImg={size}
							bgSize="cover"
							bgPos="center center"
						/>
					</Row>
				</Row>
			</Div>
		</StyledContainer>
	);
};

export default Sizing;
