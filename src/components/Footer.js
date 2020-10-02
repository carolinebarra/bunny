import React from 'react';
import styled from 'styled-components';
import { Mail } from '@styled-icons/heroicons-solid/Mail';
import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Row } from 'atomize';
import grass from '../images/grass2.svg';
import bunny from '../images/bunny-ears.png';
import { Link } from 'react-router-dom';
const Box = styled.div`
	position: absolute;

	width: 100%;
	background-image: url(${grass});
	background-size: 89vh;
	width: 100%;
	display: block;
	margin-top: 5rem;
	z-index: 10;
	padding: 19px 0;
	min-height: 65px;
	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;
	font-family: cooper-black-std;
	@media (max-width: 414px) {
		background-size: cover;
	}

	color: #e94f35;
	img {
		width: 70px;
		position: absolute;
		left: 0;
		bottom: 44px;
		@media (max-width: 414px) {
			left: 1rem;
			bottom: 6rem;
		}
	}
	ul {
		justify-self: start;
		align-self: flex-end;
		list-style-type: none;
		display: -webkit-inline-box;
		padding-top: 44px;
		padding-bottom: 18px;
		text-decoration: none;
		@media (max-width: 414px) {
			display: block;
		}
	}
	li {
		padding: 0 2em 0 7em;
		text-decoration: none;
	}
	a {
		padding: 0;
		margin-top: 0.25em;
		margin-bottom: 0.35em;
		text-decoration: none;
		color: #e94f35;
	}
`;
const Container = styled.div`
	display: flex;
	padding-top: 64px;

	@media (max-width: 414px) {
		display: inline-grid;
		padding-top: 4rem;
	}
`;

const Social = styled.a`
	margin: 10px;
	color: #e94f35;
	width: 67px;
	cursor: pointer;
	height: 40px;
	svg {
		width: 50px;
		height: 50px;
	}
`;

const handlePageChange = () => {
	window.scrollTo(0, 0);
};
const Footer = () => {
	return (
		<Box>
			<img src={bunny} alt="Logo" />
			<Row justify="space-between">
				<ul>
					<li>
						<Link to="/About" onClick={handlePageChange}>
							<h2>About</h2>
						</Link>
					</li>
					<li>
						<Link to="/Sizing" onClick={handlePageChange}>
							<h2>Shipping</h2>
						</Link>
					</li>
					<li>
						<Link to="/Shipping" onClick={handlePageChange}>
							<h2>Sizing</h2>
						</Link>
					</li>
				</ul>

				<Container>
					<Social onClick={() => (window.location.href = `mailto:hello@bunnyfields.co.uk`)}>
						<Mail />
					</Social>
					<Social href="https://www.instagram.com/bunny_fields/" target="_blank">
						<Instagram />
					</Social>
				</Container>
			</Row>
		</Box>
	);
};

export default Footer;
