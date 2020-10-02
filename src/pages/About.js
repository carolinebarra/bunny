import React from 'react';

import { Div, Button, Row, Col, Container } from 'atomize';
import hearts from '../images/double-hearts.png';
import model from '../images/about-1.jpg';
import machine from '../images/about-2.jpg';
import underwear from '../images/about-3.jpg';
import bee from '../images/bee.png';

import styled from 'styled-components';

const StyledContainer = styled(Container)`
	height: 100%;
	max-height: 75%;
	text-decoration: none;
	max-width: 60%;
	padding-bottom: 8rem;

	overflow: hidden;
	color: #e94f35;
	h1 {
		font-size: 50px;
		font-family: cooper-black-std;
	}
	@media (max-width: 414px) {
		padding-bottom: 0;
	}
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
		text-align: center;
	}
`;

const About = () => {
	return (
		<StyledContainer>
			<Div d="flex" justify={{ xs: 'center', lg: 'center' }}>
				<Row p={{ t: '10rem' }} maxW={{ xs: '100%' }}>
					<Button
						h="3.5rem"
						textSize="display1"
						textWeight="300"
						w="75rem"
						bg="#c6d5a1"
						align="center"
						fontFamily="cooper-black-std"
						style={{ '-webkit-text-stroke-width': 'thin' }}
					>
						About us ..
					</Button>

					<Row>
						<Col>
							<Div
								h="80px"
								w="100px"
								m={{ l: '8rem', r: '3rem', y: '5rem' }}
								bgImg={hearts}
								bgSize="cover"
								bgPos="center center"
							/>
							<StyledText>
								The idea behind bunny fields is to make cute designs to make every day a little more
								special, from the moment you put your panties on :)
							</StyledText>
						</Col>
						<Div
							w={{ xs: '20rem', md: '35rem' }}
							h={{ xs: '20rem', md: '35rem' }}
							m={{ y: { xs: '1rem', md: '5rem' } }}
							bgImg={model}
							bgSize="cover"
							bgPos={{ xs: 'right right', lg: 'center center' }}
						/>
					</Row>
					<Row>
						<Div
							w={{ xs: '20rem', md: '35rem' }}
							h={{ xs: '20rem', md: '35rem' }}
							m={{ y: { xs: '0', md: '5rem' }, r: { xs: '1rem', md: '0rem' } }}
							bgImg={machine}
							bgSize="cover"
							bgPos={{ xs: 'right right', lg: 'center center' }}
							b
						/>
						<Col>
							<StyledText>
								Sustainability will always be at the core of bunny fields values. All the products are
								made with love in London, using sustainable fabrics such as deadstock, recycled or
								organic.
							</StyledText>
						</Col>
					</Row>
					<Row>
						<Col>
							<StyledText>
								We believe that loving your garments is a form of self care, and by making limited
								collections we hope to help celebrate them and yourselves.
							</StyledText>
							<Div
								h="80px"
								w="100px"
								m={{
									l: { xs: '13rem', md: '17rem' },
									r: { xs: '0', md: '3rem' },
									y: { xs: '-22rem', md: '5rem' }
								}}
								bgImg={bee}
								bgSize="cover"
								bgPos="center center"
								pos="absolute"
							/>
						</Col>
						<Div
							w={{ xs: '20rem', md: '35rem' }}
							h={{ xs: '20rem', md: '35rem' }}
							m={{ y: { xs: '1rem', md: '5rem' } }}
							bgImg={underwear}
							bgSize="cover"
							bgPos="center center"
						/>
					</Row>
				</Row>
			</Div>
		</StyledContainer>
	);
};

export default About;
